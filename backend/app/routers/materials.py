from typing import Annotated
from sqlalchemy.orm import Session
from app import crud
from app.database import get_db
from app.schemas import MaterialCreate, MaterialRead, MaterialUpdate, CardCreate, CardRead
from fastapi import APIRouter, Depends, HTTPException, Response


router = APIRouter(prefix="/materials", tags=["materials"])


@router.post("", response_model=MaterialRead, status_code=201)
def create_material(
    data: MaterialCreate,
    session: Annotated[Session, Depends(get_db)],
):
    return crud.create_material(session, data)


@router.get("", response_model=list[MaterialRead])
def get_materials(
    session: Annotated[Session, Depends(get_db)],
):
    return crud.get_materials(session)


@router.get("/{material_id}", response_model=MaterialRead)
def get_material(
    material_id: int,
    session: Annotated[Session, Depends(get_db)],
):
    material = crud.get_material(session, material_id)

    if material is None:
        raise HTTPException(
            status_code=404,
            detail="Материал не найден",
        )

    return material


@router.put("/{material_id}", response_model=MaterialRead)
def update_material(
    material_id: int,
    data: MaterialUpdate,
    session: Annotated[Session, Depends(get_db)],
):
    material = crud.get_material(session, material_id)

    if material is None:
        raise HTTPException(
            status_code=404,
            detail="Материал не найден",
        )

    return crud.update_material(session, material, data)


@router.delete("/{material_id}", status_code=204)
def delete_material(
    material_id: int,
    session: Annotated[Session, Depends(get_db)],
) -> Response:
    material = crud.get_material(session, material_id)

    if material is None:
        raise HTTPException(
            status_code=404,
            detail="Материал не найден",
        )

    crud.delete_material(session, material)
    return Response(status_code=204)


@router.post("/{material_id}/cards", response_model=CardRead, status_code=201)
def create_card(
    material_id: int,
    data: CardCreate,
    session: Annotated[Session, Depends(get_db)],
):
    material = crud.get_material(session, material_id)

    if material is None:
        raise HTTPException(
            status_code=404,
            detail="Материал не найден",
        )

    return crud.create_card(session, material_id, data)


@router.get(
    "/{material_id}/cards",
    response_model=list[CardRead],
)
def get_cards(
    material_id: int,
    session: Annotated[Session, Depends(get_db)],
):
    material = crud.get_material(session, material_id)

    if material is None:
        raise HTTPException(
            status_code=404,
            detail="Материал не найден",
        )

    return crud.get_cards(session, material_id)


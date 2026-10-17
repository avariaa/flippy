from typing import Annotated
from fastapi import APIRouter, Depends, HTTPException, Response
from sqlalchemy.orm import Session
from app import crud
from app.database import get_db
from app.schemas import CardRead, CardUpdate


router = APIRouter(prefix="/cards", tags=["cards"])


@router.get("/{card_id}", response_model=CardRead)
def get_card(
    card_id: int,
    session: Annotated[Session, Depends(get_db)],
):
    card = crud.get_card(session, card_id)

    if card is None:
        raise HTTPException(
            status_code=404,
            detail="Карточка не найдена",
        )

    return card


@router.put("/{card_id}", response_model=CardRead)
def update_card(
    card_id: int,
    data: CardUpdate,
    session: Annotated[Session, Depends(get_db)],
):
    card = crud.get_card(session, card_id)

    if card is None:
        raise HTTPException(
            status_code=404,
            detail="Карточка не найдена",
        )

    return crud.update_card(session, card, data)


@router.delete("/{card_id}", status_code=204)
def delete_card(
    card_id: int,
    session: Annotated[Session, Depends(get_db)],
) -> Response:
    card = crud.get_card(session, card_id)

    if card is None:
        raise HTTPException(
            status_code=404,
            detail="Карточка не найдена",
        )

    crud.delete_card(session, card)
    return Response(status_code=204)
from sqlalchemy.orm import Session
from sqlalchemy import select
from app.models import Material
from app.schemas import MaterialCreate, MaterialUpdate


def create_material(session: Session, data: MaterialCreate) -> Material:
    material = Material(**data.model_dump())
    session.add(material)
    session.commit()
    session.refresh(material)
    return material


def get_materials(session: Session) -> list[Material]:
    statement = select(Material).order_by(Material.id)
    return list(session.scalars(statement))


def get_material(session: Session, material_id: int) -> Material | None:
    return session.get(Material, material_id)


def update_material(
    session: Session,
    material: Material,
    data: MaterialUpdate,
) -> Material:
    material.title = data.title
    material.subtitle = data.subtitle
    material.color = data.color

    session.commit()
    session.refresh(material)
    return material


def delete_material(session: Session, material: Material) -> None:
    session.delete(material)
    session.commit()
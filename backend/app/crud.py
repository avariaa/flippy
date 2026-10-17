from sqlalchemy.orm import Session
from sqlalchemy import select
from app.models import Material, Card
from app.schemas import MaterialCreate, MaterialUpdate, CardCreate, CardUpdate

#crud материалов
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


#crud карточек
def create_card(
    session: Session,
    material_id: int,
    data: CardCreate,
) -> Card:
    card = Card(
        material_id=material_id,
        **data.model_dump(),
    )

    session.add(card)
    session.commit()
    session.refresh(card)
    return card


def get_cards(
    session: Session,
    material_id: int,
) -> list[Card]:
    statement = (
        select(Card)
        .where(Card.material_id == material_id)
        .order_by(Card.id)
    )
    return list(session.scalars(statement))


def get_card(session: Session, card_id: int) -> Card | None:
    return session.get(Card, card_id)


def update_card(
    session: Session,
    card: Card,
    data: CardUpdate,
) -> Card:
    card.question = data.question
    card.answer = data.answer

    session.commit()
    session.refresh(card)
    return card


def delete_card(session: Session, card: Card) -> None:
    session.delete(card)
    session.commit()
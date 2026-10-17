from pydantic import BaseModel, ConfigDict, Field


class MaterialCreate(BaseModel):
    model_config = ConfigDict(str_strip_whitespace=True)

    title: str = Field(min_length=1, max_length=200)
    subtitle: str = Field(default="", max_length=300)
    color: str = Field(
        default="#B9F67A",
        pattern=r"^#[0-9A-Fa-f]{6}$",
    )


class MaterialRead(MaterialCreate):
    model_config = ConfigDict(from_attributes=True)

    id: int


class MaterialUpdate(MaterialCreate):
    subtitle: str = Field(max_length=300)
    color: str = Field(pattern=r"^#[0-9A-Fa-f]{6}$")


class CardCreate(BaseModel):
    model_config = ConfigDict(str_strip_whitespace=True)

    question: str = Field(min_length=1)
    answer: str = Field(min_length=1)


class CardRead(CardCreate):
    model_config = ConfigDict(from_attributes=True)

    id: int
    material_id: int


class CardUpdate(CardCreate):
    pass
from sqlalchemy import URL, create_engine
from app.config import settings
from collections.abc import Iterator
from sqlalchemy.orm import Session, sessionmaker


database_url = URL.create(
    drivername="postgresql+psycopg",
    username=settings.db_user,
    password=settings.db_password.get_secret_value(),
    host=settings.db_host,
    port=settings.db_port,
    database=settings.db_name,
)

engine = create_engine(database_url)
SessionLocal = sessionmaker(bind=engine)


def get_db() -> Iterator[Session]:
    with SessionLocal() as session:
        yield session
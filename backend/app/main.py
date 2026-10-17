from fastapi import FastAPI
from app.routers.materials import router as materials_router
from app.routers.cards import router as cards_router


app = FastAPI(title="Flippy API")
app.include_router(materials_router)
app.include_router(cards_router)

@app.get("/")
def root():
    return {"message": "Flippy API работает"}
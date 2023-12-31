import { Router } from "express";

const router = Router();

const pets = [];

router.get("/", (req, res) => {
    res.json({
        pets,
    });
});

router.post("/", (req, res) => {
    const { name, age } = req.body;

    pets.push({
        name,
        age
    });

    res.json({
        pets: {
            name,
            age,
        },
    });
});

export default router;

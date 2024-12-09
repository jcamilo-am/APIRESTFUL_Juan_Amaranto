// ./controllers/personController.ts
import { Request, Response } from 'express';
import { 
  createPerson, 
  getAllPeople, 
  getPersonById, 
  updatePerson, 
  deletePerson 
} from '../services/personService';

// Crear una nueva persona
export const createPersonController = async (req: Request, res: Response) => {
  try {
    const person = await createPerson(req.body);
    res.status(201).json(person);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'Server error' });
    }
  }
};

// Obtener todas las personas
export const getAllPeopleController = async (req: Request, res: Response) => {
  try {
    const people = await getAllPeople();
    res.status(200).json(people);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'Server error' });
    }
  }
};

// Obtener una persona por ID
export const getPersonByIdController = async (req: Request, res: Response) => {
  try {
    const person = await getPersonById(req.params.id);
    res.status(200).json(person);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'Server error' });
    }
  }
};

// Actualizar una persona
export const updatePersonController = async (req: Request, res: Response) => {
  try {
    const person = await updatePerson(req.params.id, req.body);
    res.status(200).json(person);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'Server error' });
    }
  }
};

// Eliminar una persona
export const deletePersonController = async (req: Request, res: Response) => {
  try {
    await deletePerson(req.params.id);
    res.status(200).json({ message: 'Persona eliminada' });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'Server error' });
    }
  }
};

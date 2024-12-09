// ./services/personService.ts
import { Person } from '../index';

// Crear una nueva persona
export const createPerson = async (data: any) => {
  try {
    const person = await Person.create(data);
    return person;
  } catch (error) {
    throw new Error('Error al crear una persona');
  }
};

// Obtener todas las personas
export const getAllPeople = async () => {
  try {
    const people = await Person.findAll();
    return people;
  } catch (error) {
    throw new Error('Error al obtener las personas');
  }
};

// Obtener una persona por ID
export const getPersonById = async (personId: string) => {
  try {
    const person = await Person.findByPk(personId);
    if (!person) {
      throw new Error('Persona no encontrada');
    }
    return person;
  } catch (error) {
    throw new Error('Error al obtener la persona');
  }
};

// Actualizar una persona
export const updatePerson = async (personId: string, data: any) => {
  try {
    const person = await Person.findByPk(personId);
    if (!person) {
      throw new Error('Persona no encontrada');
    }
    await person.update(data);
    return person;
  } catch (error) {
    throw new Error('Error al actualizar la persona');
  }
};

// Eliminar una persona
export const deletePerson = async (personId: string) => {
  try {
    const person = await Person.findByPk(personId);
    if (!person) {
      throw new Error('Persona no encontrada');
    }
    await person.destroy();
  } catch (error) {
    throw new Error('Error al eliminar la persona');
  }
};

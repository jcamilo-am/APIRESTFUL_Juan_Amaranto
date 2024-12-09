"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePerson = exports.updatePerson = exports.getPersonById = exports.getAllPeople = exports.createPerson = void 0;
const index_1 = require("../index");
const createPerson = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const person = yield index_1.Person.create(data);
        return person;
    }
    catch (error) {
        throw new Error('Error al crear una persona');
    }
});
exports.createPerson = createPerson;
const getAllPeople = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const people = yield index_1.Person.findAll();
        return people;
    }
    catch (error) {
        throw new Error('Error al obtener las personas');
    }
});
exports.getAllPeople = getAllPeople;
const getPersonById = (personId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const person = yield index_1.Person.findByPk(personId);
        if (!person) {
            throw new Error('Persona no encontrada');
        }
        return person;
    }
    catch (error) {
        throw new Error('Error al obtener la persona');
    }
});
exports.getPersonById = getPersonById;
const updatePerson = (personId, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const person = yield index_1.Person.findByPk(personId);
        if (!person) {
            throw new Error('Persona no encontrada');
        }
        yield person.update(data);
        return person;
    }
    catch (error) {
        throw new Error('Error al actualizar la persona');
    }
});
exports.updatePerson = updatePerson;
const deletePerson = (personId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const person = yield index_1.Person.findByPk(personId);
        if (!person) {
            throw new Error('Persona no encontrada');
        }
        yield person.destroy();
    }
    catch (error) {
        throw new Error('Error al eliminar la persona');
    }
});
exports.deletePerson = deletePerson;
//# sourceMappingURL=personService.js.map
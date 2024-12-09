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
exports.deletePersonController = exports.updatePersonController = exports.getPersonByIdController = exports.getAllPeopleController = exports.createPersonController = void 0;
const personService_1 = require("../services/personService");
const createPersonController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const person = yield (0, personService_1.createPerson)(req.body);
        res.status(201).json(person);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
        else {
            res.status(500).json({ message: 'Server error' });
        }
    }
});
exports.createPersonController = createPersonController;
const getAllPeopleController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const people = yield (0, personService_1.getAllPeople)();
        res.status(200).json(people);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
        else {
            res.status(500).json({ message: 'Server error' });
        }
    }
});
exports.getAllPeopleController = getAllPeopleController;
const getPersonByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const person = yield (0, personService_1.getPersonById)(req.params.id);
        res.status(200).json(person);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
        else {
            res.status(500).json({ message: 'Server error' });
        }
    }
});
exports.getPersonByIdController = getPersonByIdController;
const updatePersonController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const person = yield (0, personService_1.updatePerson)(req.params.id, req.body);
        res.status(200).json(person);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
        else {
            res.status(500).json({ message: 'Server error' });
        }
    }
});
exports.updatePersonController = updatePersonController;
const deletePersonController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, personService_1.deletePerson)(req.params.id);
        res.status(200).json({ message: 'Persona eliminada' });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
        else {
            res.status(500).json({ message: 'Server error' });
        }
    }
});
exports.deletePersonController = deletePersonController;
//# sourceMappingURL=personController.js.map
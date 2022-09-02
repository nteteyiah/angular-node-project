"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const project_1 = require("../Controllers/project");
const routers = (0, express_1.Router)();
routers.post("/create", project_1.createProject);
routers.get("/all", project_1.getProjects);
routers.get("/:id", project_1.getProject);
routers.patch("/:id", project_1.updateProject);
routers.put('/:id', project_1.updateComplete);
routers.delete("/:id", project_1.deleteProject);
exports.default = routers;

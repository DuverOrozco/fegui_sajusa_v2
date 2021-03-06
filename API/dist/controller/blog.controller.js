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
exports.BlogController = void 0;
const blog_model_1 = require("../model/blog.model");
class BlogController {
    /*POST*/
    post(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield blog_model_1.BlogModel.post(req, res);
            }
            catch (error) {
                res.status(500).json({ message: "Error calling function" });
            }
        });
    }
    Byid(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield blog_model_1.BlogModel.Byid(req.params.id, res);
            }
            catch (error) {
                res.status(500).json({ message: "Error calling function" });
            }
        });
    }
    createPost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield blog_model_1.BlogModel.createPost(req, res);
            }
            catch (error) {
                res.status(500).json({ message: "Error calling function" });
            }
        });
    }
    updatePost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield blog_model_1.BlogModel.updatePost(req, res);
            }
            catch (error) {
                res.status(500).json({ message: "Error calling function" });
            }
        });
    }
    deletePost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield blog_model_1.BlogModel.deletePost(req.params.id, res);
            }
            catch (error) {
                res.status(500).json({ message: "Error calling function" });
            }
        });
    }
}
exports.BlogController = BlogController;

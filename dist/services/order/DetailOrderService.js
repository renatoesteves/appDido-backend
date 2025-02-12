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
exports.DetailOrderService = void 0;
const prisma_1 = require("../../prisma");
class DetailOrderService {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ order_id }) {
            const orders = yield prisma_1.prismaClient.item.findMany({
                where: {
                    order_id: order_id
                },
                include: {
                    product: true,
                    order: true,
                }
            });
            return orders;
        });
    }
}
exports.DetailOrderService = DetailOrderService;

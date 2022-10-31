const { tracksModel } = require("../models");

/**
 * Obtener lista de la base de datos!
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getItems = async (req, res) => {
    try {
        const data = await tracksModel.find({});
        res.send({ data });
    } catch (e) {
        console.log(e)
    }
};
/**
 * Obtener un detalle
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getItem = async (req, res) => {
    try{
        const {id} = req.params;
        // const data = await tracksModel.findOne({_id:id});
        const data = await tracksModel.find({_id:id});
        res.send({ data });
    }catch(e){
        console.log(e)
    }
};

/**
 * Insertar un registro
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const createItem = async (req, res) => {
    try {
        // const {body} = req
        // const data_ = await tracksModel.create(body);
        const data = await tracksModel.create(req.body);
        console.log(data)
        res.status(200);
        res.send({data})
    } catch (e) {
        console.log(e)
    }
};

/**
 * Actualizar un registro
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const updateItem = async (req, res) => {
    try {
        const data = await tracksModel.findOneAndUpdate(
            req.id, req.body
        );
        res.send({ data });
    } catch (e) {
        console.log(e)
    }
};

/**
 * Eliminar un registro
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const deleteItem = async (req, res) => {
    try{
        const deleteResponse = await tracksModel.delete({_id:req.id});
        const data = {
            deleted: deleteResponse.matchedCount
        }
        res.send({data});
    }catch(e){
        console.log(e)
    }
};

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };

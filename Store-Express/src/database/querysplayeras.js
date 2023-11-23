export const querys ={
    getPlayeras: "select * from Playeras",
    getProductById: "select * from Playeras where id = @id",
    addCart: "exec addCart @id, @quantity, @size",
    getCart: "select * from showCart"
}
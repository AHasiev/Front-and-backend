const Todo = require("../models/ToDo.model");

module.exports.toDoController = {
  // getTodo: (req, res) => {
  //     Todo.find({})
  //     .then((data) => {
  //         res.json(data);
  //     });
  // },

  getToDo: async (req, res) => {
    try {
      const toDos = await Todo.find();
      res.json(toDos);
    } catch (error) {
      res.json(error.message);
    }
  },

  // postTodo: (req, res) => {
  //     Todo.create({
  //         text: req.body.text,
  //     }).then((data) => {
  //         res.json(data);
  //     })
  //     .catch((e) => {
  //         console.log(e);
  //     });
  // },
  postTodo: async (req, res) => {
    try {
      const todo = await Todo.create({
        text: req.body.text,
      });
      res.json(todo);
    } catch (error) {
      res.json(error);
    }
  },

  //
  deleteTodo: async (req, res) => {
    try {
      await Todo.findByIdAndRemove(req.params.id);
      res.json("Туду удален");
    } catch (error) {
      res.json(error);
    }
  },

  patchTodo: async (req, res) => {
    try {
      const todo = await Todo.findByIdAndUpdate(
        req.params.id,
        {
          completed: req.body.completed,
        },
        { new: true }
      );
      res.json(todo);
    } catch (error) {
      res.json(error);
    }
  },
};

//   patchTodo: (req, res) => {
//     Todo.findByIdAndUpdate(req.params.id, {
//       completed: req.body.completed,
//     }).then((data) => {
//       res.json(data);
//     });
//   },
// };

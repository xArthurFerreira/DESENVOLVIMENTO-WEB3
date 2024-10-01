const { User, users } = require('../models/userModel');

exports.addUser = (req, res) => {
    const { id, name, email } = req.body;
    const newUser = new User(id, name, email);
    users.push(newUser);
    res.json({ message: 'Usuário adicionado com sucesso!', user: newUser });
};

exports.updateUser = (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    const user = users.find(u => u.id === parseInt(id));

    if (user) {
        user.name = name;
        user.email = email;
        res.json({ message: 'Usuário atualizado com sucesso!', user });
    } else {
        res.status(404).json({ message: 'Usuário não encontrado!' });
    }
};

exports.deleteUser = (req, res) => {
    const { id } = req.params;
    const index = users.findIndex(u => u.id === parseInt(id));

    if (index !== -1) {
        const deletedUser = users.splice(index, 1);
        res.json({ message: 'Usuário deletado com sucesso!', user: deletedUser });
    } else {
        res.status(404).json({ message: 'Usuário não encontrado!' });
    }
};

exports.getUsers = (req, res) => {
    res.json(users);
};

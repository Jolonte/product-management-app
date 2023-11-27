import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	age: { type: Number, required: true },
	sex: {
		type: String,
		required: true,
		enum: ['Masculino', 'Feminino', 'Não Binário', 'Outro'],
	},
	email: {
		type: String,
		required: true,
		unique: true,
		validate: {
			validator: (value) => value.length >= 5 && value.length <= 255,
			message: 'E-mail deve ter entre 5 e 255 caracteres',
		},
	},
	password: {
		type: String,
		required: true,
		validate: {
		  validator: (value) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value),
		  message: 'Senha deve ter pelo menos 8 caracteres, incluindo pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial.',
		},
	  },
	cpf: {
		type: Number,
		required: true,
		unique: true,
		validate: {
			validator: (value) => value.toString().length === 11,
			message: 'CPF deve ter 11 caracteres',
		},
	},
	address: { type: String, required: true },
	cep: {
		type: Number,
		required: true,
		validate: {
			validator: (value) => value.toString().length === 8,
			message: 'CEP deve ter 8 caracteres',
		},
	},
}, { timestamps: true })

const UserModel = mongoose.model('User', userSchema)

export default UserModel

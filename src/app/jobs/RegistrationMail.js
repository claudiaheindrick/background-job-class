import Mail from '../libs/Mail';

export default {
  key: 'RegistrarionMail',
  options: {
    delay: 5000,
    priority: 3,
    repeat: {
      every: 1,
      limit: 100,
    },
    lifo: true,
  },

  async handle({ data }) {
    const { user } = data;
    await Mail.sendMail({
      from: 'DIO <contato@dio.com.br>',
      to: `${user.name} <${user.email}>`,
      subject: 'Cadastro de Usuário',
      html: `Olá ${user.name}, bem-vindo à DIO.`,
    });
  },
};

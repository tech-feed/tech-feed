import { defineMessages } from 'react-intl'

const messages = defineMessages({
  app_name: 'Camaleão',
  sign_in: 'Entrar',
  sign_out: 'Sair',
  sign_up: 'Cadastro',
  email: 'Email',
  username: 'Usuário',
  password: 'Senha',
  about: 'Sobre',
  home: 'Home',
  page_not_found: 'Página não encontrada',
  settings: 'Configurações',
  theme: 'Tema',
  default: 'Padrão',
  red: 'Vermelho',
  green: 'Verde',
  language: 'Idioma',
  en: 'Inglês',
  de: 'Alemão',
  ru: 'Russo',
  menu: 'Menu',
  menu_mini_mode: 'Mini menu',
  offline: 'Offline',
  demos:'Demos',
  dialog_demo:'Diálogo',
  dialog_title:'Título do Diálogo',
  dialog_action:'SIM, Deletar',
  dialog_message:`Dialog message. You can put as much text as you want here. 
  Ask a question or show a warning before deleting something. 
  You can also set the action text to something like "YES, Delete" and run that action by passing a "handleAction" prop. 
  This receives a "handleClose" callback with which you can close the dialog when your action is done.`,
  toast_demo:'Teste Toast',
  filter_demo:'Teste Filtro',
  list_page_demo:'Página de listagem com {count} linhas',
  forgot_password:'Esqueci a senha',
  password_reset:'Resetar a senha',
  password_confirm:'Confirmar a senha',
  registration:'Registrar',
  my_account: 'Minha conta',
  delete_account_dialog_title: 'Deletar conta?',
  delete_account_dialog_message:
    'Sua conta será deletada e você perderá todos os dados!',
  delete_account_dialog_action:'Deletar conta'
})

export default messages

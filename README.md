<!-- PROJECT LOGO -->
<br />
<div align="center">

<h1 align="center">Blog</h1>

  <p align="center">
    A ideia desse projeto é simular uma comunidade, onde todos os membros
cadastrados podem consumir, criar, atualizar e deletar publicações de
texto. Foi desenvolvido utilizando Programação Orientada a Objetos
    <br />
  <a href="https://guiwustro.github.io/blog/"> Link do Projeto
  </a>
  </p>
</div>

<!-- ABOUT THE PROJECT -->

## Sobre o projeto

O projeto conta com 3 páginas, uma para registro, outra para login e por último,
a página principal, onde é possível criar, editar e deletar mensagens. Para
criação desse projeto foi utilizado uma
[API](https://gitlab.com/-/snippets/2363840).<br/>

Na página de registro, o usuário é capaz de fazer registro caso preencha os
campos corretamente, caso não for preenchido corretamente algum campo, é
disparado um erro ao usuário. Logo após o registro, o usuário é direcionado a
página principal, não havendo a necessidade de passar pelo Login. Caso o usuário
já tenha uma conta criada, é possível acessar pela página de Login. <br/>

A página do blog, conta com as últimas mensagens enviadas pelos usuários. Nela o
usuário é capaz de enviar mensagens, editar a mensagem já enviada e também
deleta-la. Também há um botão de Logout para o usuário desconectar de sua conta.

## Tecnologias utilizadas

O projeto foi realizado utilizando Programação Orientada a Objetos, sendo
utilizado somente JavaScript Vanilla, CSS e HTML.

<!-- USAGE EXAMPLES -->

## Usabilidade

<div align="center">
<img src="screenshots/blog.gif">
</div>
<!-- ROADMAP -->

## Features

- [x] Página de registro do usuário contando com 4 campos (nome de usuário,
      e-mail, foto de perfil e senha);
- [x] Página de login;
- [x] Redirecionamento automático ao blog após o registro ou realização do
      login;
- [x] Página do blog com exibição das últimas mensagens enviadas pelos usuários
      ativos do blog;
- [x] Campo para criação de uma nova mensagem;
- [x] Possibilidade de edição da mensagem realizada pelo usuário;
- [x] Possibilidade de remoção da mensagem do usuário;
- [x] Responsivo para todas as telas;

## Organização das pastas, arquivos, classes e métodos do projeto

## controlers

São os arquivos que tem a função de criar elementos DOM, fazer requisições e
criar as ações nos elementos da página quando forem clicados;

### class Api

Tem a função de chamar todas as requests na API necessárias, foi criado um
método para cada requisição;

### class Blog

1. headerInfoUser: Editar a informação do usuário no header, de acordo com o que
   é recebido no localStorage (criar)
2. createNewPost: Cria um novo post e atualiza na sequência a página para
   mostrar que foi criado um post
3. createTemplatePost: Cria um template (formato DOM) de cada post(card), sendo
   passado como parâmetro um objeto, dentro dele tem a verificação para ver se
   quando for criado é necessário criar os botões do post.
4. createButtonsPost: Cria um template que adiciona os botões do post do Card
5. getAllPosts: Lista todos os posts da API usando um loop for each;
6. formataData: formata a data para o padrão br, sendo passado como parâmetro a
   data recebida pela API;
7. logoutBlog: desconecta do blog (remove o token do localStorage);
8. deletePost: seleciona o post e deleta;
9. openPostToEdit: função que verifica se é clicado no botão editar, pega o id
   dessa postagem, é criado um form com text-area e buttons, de cancel e submit,
   e substitui o paragráfo, deixando o parágrafo com display none, e por fim
   cria um evento, que quando for dado o submit, o post será editado na API, e
   chama novamente o getAllPosts para atualizar a página;
10. editPost: função chamada no openPostToEdit;

### class Register

1. getInfoForm: pega as informações do formulário, transformando num objeto;
2. registerUser: chama a função getInfoForm, envia uma requisição para Api criar
   um usuário, fazendo condicionais para cada situação, cria-se um modal para
   cada tipo de resposta, caso não receber mensagem de erro transfere o usuário
   para página do blog.

### class Login

1. getInfoLogin: pega as informações do formulário e cria um objeto com as
   informações dadas pelo usuário;
2. loginUser: faz a requisição da API e verifica a resposta, criando
   condicionais para cada resposta.

## models

A pasta models contêm classes para serem instanciadas, uma para criar um objeto
para o Usuário registrado, outra para criar um objeto para o Usuário login e por
fim, uma para criação do modal, sendo um template DOM, toda vez que for
necessário criar um Modal na página, poderá ser utilizado o mesmo, levando como
parâmetro o título e uma descrição para ele.

## script

A pasta script possui um arquivo para cada página, na qual adiciona as ações
criadas nos controllers em certos eventos ocorridos, através do
addEventListener.

## styles

Nela, são criados um arquivo style específico para cada página:

1. syle.login.css
2. style.blog.css
3. style.register.css

E também, arquivos reutilizados, e chamados em todas as páginas, que são:

1. base.css: utiliza-se o pseudoelemento "root" para salvar todas as cores CSS e
   possíveis estilizações padronizadas numa variável;
2. reset.css
3. components.css: componentes que serão reutilizados nas páginas HTML, não
   havendo a necessidade de repetição das mesmas estilizações, tais como,
   estilizações específicas para os botões ou para o modal;

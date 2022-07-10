# Organização das pastas do projeto Blog Kenzie

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
3. style.register.css E também, arquivos reutilizados, e chamados em todas as
   páginas, que são:
4. base.css: utiliza-se o pseudoelemento "root" para salvar todas as cores CSS e
   possíveis estilizações padronizadas numa variável;
5. reset.css
6. components.css: componentes que serão reutilizados nas páginas HTML, não
   havendo a necessidade de repetição das mesmas estilizações, tais como,
   estilizações específicas para os botões ou para o modal;

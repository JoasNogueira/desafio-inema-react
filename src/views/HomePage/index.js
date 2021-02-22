import { Component } from "react";
import axios from "axios";
import "./styles.css";
import NavMenu from "../../components/navMenu";
import Logo from "../../components/Logo";
import Topico from "../../components/Topico";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import Modal from "../../components/Modal";
import Input from "../../components/Input";
import Checkbox from "../../components/Checkbox";
import InputFile from "../../components/InputFile";

class HomePage extends Component {
  state = {
    modalOpen: false,
    nome: "",
    local_foto: "",
    nome_foto: "",
    data_foto: "",
    imagem: null,
    termos: false,
  };

  openModal = () => {
    this.setState({
      modalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      modalOpen: false,
    });
  };

  toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  onSubmit = () => {
    let data = {
      nome: this.state.nome,
      local_foto: this.state.local_foto,
      nome_foto: this.state.nome_foto,
      data_foto: this.state.data_foto,
      img_base64: "",
      termos: this.state.termos,
    };

    let self = this;
    this.toBase64(this.state.imagem).then((result) => {
      data.img_base64 = result.split(",")[1];
      console.log(data);

      axios
        .post("http://apidev.inema.ba.gov.br/participante", data)
        .then(function (response) {
          alert("Eviado com sucesso");

          self.setState({
            nome: "",
            local_foto: "",
            nome_foto: "",
            data_foto: "",
            imagem: null,
            termos: false,
            modalOpen: false,
          });
        })
        .catch(function (error) {
          alert("Falha ao Enviar");
          console.log(error);
        });
    });
  };

  render() {
    return (
      <div>
        <NavMenu openModal={this.openModal} />
        <Logo />
        <div>
          <div className="conteudo-conteiner">
            <div className="conteudo">
              <div className="inicio-conteudo">
                <Topico id="concurso" titulo="O CONCURSO">
                  <p>
                    Concurso de fotografia para todos os técnicos do Inema para
                    exposição de fotos que retratem a temática água (os desafios
                    e as belezas encontradas em campo) pelos colaboradores. Além
                    de uma apresentação cultural com um artista de rua (poesia,
                    musica, cordel) que aborde a temática água.
                  </p>
                </Topico>
                <Card openModal={this.openModal} />
              </div>
              <hr />
              <Topico id="sobre" titulo="SOBRE">
                <p>Objetivos</p>
                <p>
                  Promover a seleção de 100 fotografias produzidas por
                  colaboradores do Inema em comemoração ao dia da água, que será
                  elaborado um mural de fotos denominado de “Varal das Águas”.
                </p>
                <p>Dos participante</p>
                <p>
                  Poderão participar do Concurso Fotográfico 2017: Todos os
                  colaboradores do Instituto do Meio Ambiente e Recursos
                  Hídricos - INEMA e Secretaria do Meio Ambiente -SEMA.
                </p>
                <p>Das especificações das fotografias participantes</p>
                <p>
                  As fotografias devem abordar somente o tema OS DESAFIOS E AS
                  BELEZAS RETRATADAS EM CAMPO REFERENTE À SITUAÇÃO HIDRICA,
                  devendo ser obrigatoriamente a foto ser tirada em inspeção em
                  campo a serviço do Inema.
                </p>
                <p>Premiação final do concurso</p>
                <p>
                  As 05 (cinco) primeiras fotografia que for mais votada nas
                  redes sociais (Facebook e Instagram) do Inema, receberá como
                  prêmio.
                </p>
              </Topico>
              <Topico id="regras" titulo="REGRAS">
                <p>
                  Todas as fotos que retrate da temática água (tais como
                  situação de secas ou excedentes hídricos, as belezas e os
                  desafios de se trabalhar com os recursos hídricos etc.) serão
                  bem vindas.
                </p>
                <ul>
                  <li>As fotos devem ser originais e sem alterações.</li>
                  <li>
                    As fotos devem expor os ambientes visitados em inspeções
                    técnicas realizadas durante inspeções pelo INEMA.
                  </li>
                  <li>
                    {" "}
                    Fotografias que incluam pessoas serão desclassificadas.
                  </li>
                  <li>
                    {" "}
                    As fotos devem ser enviadas com um formulário de inscrição
                    preenchido.
                  </li>
                  <li> As fotografias do concurso se tornarão publicas.</li>
                  <li>
                    O fotógrafo da foto que receber mais votos ganhará um prêmio
                    simbólico.
                  </li>
                  <li>Cada pessoa só poderá cadastrar uma única foto.</li>
                  <li>A votação será por meio das redes sociais do INEMA.</li>
                  <li>As vagas serão limitadas apenas 50.</li>
                </ul>
                <br />
                <p>
                  A foto vencedora irá ganhar um kit de brinde (Agenda, caneta,
                  livro).
                </p>
              </Topico>
            </div>
          </div>
        </div>
        <Footer />

        <Modal
          titulo="Cadastro"
          open={this.state.modalOpen}
          onClose={this.closeModal}
          onSubmit={this.onSubmit}
        >
          <form>
            <div className="input-group">
              <Input
                name="nome"
                label="Nome do colaborador:"
                type="text"
                placeholder="Insira seu nome"
                value={this.state.nome}
                onChange={(e) =>
                  this.setState({
                    nome: e.target.value,
                  })
                }
              />

              <Input
                name="nome_foto"
                label="Nome da foto:"
                type="text"
                placeholder="Insira o nome da foto"
                value={this.state.nome_foto}
                onChange={(e) =>
                  this.setState({
                    nome_foto: e.target.value,
                  })
                }
              />

              <Input
                name="local_foto"
                label="Local da foto:"
                type="text"
                placeholder="Insira o local da foto"
                value={this.state.local_foto}
                onChange={(e) =>
                  this.setState({
                    local_foto: e.target.value,
                  })
                }
              />

              <Input
                name="data_foto"
                label="Data de registro:"
                type="date"
                placeholder="MM/DD/YYYY"
                value={this.state.data_foto}
                onChange={(e) =>
                  this.setState({
                    data_foto: e.target.value,
                  })
                }
              />
            </div>

            <InputFile
              name="imagem"
              label="Anexar Foto"
              onChange={(e) =>
                this.setState({
                  imagem: e.target.files[0],
                })
              }
            />

            <div>
              <label id="label-termos" for="termos">
                Termos
              </label>
              <div id="termos" className="termos">
                <ol type="I">
                  <li>
                    Confirmo autoria da fotografia, que não constitui plágio em
                    espécie alguma e não possui manipulação digital ou sobre
                    posição;
                  </li>
                  <li>
                    Declaro cessão de direito de uso e publicações da fotogradia
                    "Varal das Águas";
                  </li>
                  <li>
                    Autorização para veiculação de imagem e nome do colaborador,
                    nome artistico para a foto, local e data de registro da
                    foto, bem como permissão para os organizadores, a critério
                    próprio, sem limite de tempo e sem a incidência de quaisquer
                    ônus utilizarem ou divulgarem as imagens inscritas;
                  </li>
                  <li>
                    Confirmo autoria da fotografia, que não constitui plágio em
                    espécie alguma e não possui manipulação digital ou sobre
                    posição;
                  </li>
                  <li>
                    Declaro cessão de direito de uso e publicações da fotogradia
                    "Varal das Águas";
                  </li>
                  <li>
                    Autorização para veiculação de imagem e nome do colaborador,
                    nome artistico para a foto, local e data de registro da
                    foto, bem como permissão para os organizadores, a critério
                    próprio, sem limite de tempo e sem a incidência de quaisquer
                    ônus utilizarem ou divulgarem as imagens inscritas;
                  </li>
                </ol>
              </div>
            </div>
            <Checkbox
              name="termos"
              label="Eu li e concordo com os termos"
              checked={this.state.termos}
              onChange={(e) =>
                this.setState({
                  termos: e.target.checked,
                })
              }
            />
          </form>
        </Modal>
      </div>
    );
  }
}

export default HomePage;

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { Image } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createUser, login } from "../../redux/slices/user.slice";
import { AppDispatch, RootState } from "../../redux/store";
import { useSelector } from "react-redux";

export default function Login() {
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [nome, SetNome] = useState("");
  const [isLogin, SetIsLogin] = useState(true);
  const [typeUser, SetTypeUser] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const userLogin = useSelector((state: RootState) => state.user);

  function LoginButton() {
    return (
      <div className="d-grid col-12">
        <Button
          variant="success"
          disabled={userLogin.isLoading}
          onClick={() => {
            if (isLogin) DoLogin();
            else DoCreateUser();
          }}
        >
          {isLogin ? "Entrar" : "Cadastrar"}
        </Button>
      </div>
    );
  }

  function ToastError(msg: string) {
    toast.error(msg, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "dark",
    });
  }

  useEffect(() => {
    if (userLogin.isSucess) {
      navigate("/");
    }
  }, [userLogin.isSucess]);

  async function DoLogin() {
    try {
      await dispatch(login({ email: email, password: password }));
    } catch (error) {
      ToastError("Verifique suas credências e tente novamente");
    }
  }

  async function DoCreateUser() {
    try {
      await dispatch(
        createUser({
          nome: nome,
          email: email,
          password: password,
          typeUser: typeUser,
        })
      );
      SetIsLogin(true);
    } catch (error) {
      ToastError("Verifique suas credências e tente novamente");
    }
  }

  return (
    <Container fluid className="d-flex min-vh-100">
      <ToastContainer />

      <Row className="min-vw-100">
        <Col
          xs={12}
          md={4}
          className="bg-light d-flex flex-column align-items-center justify-content-center"
        >
          <Image src={Logo} width={100} />
          <h2>Bem vindo à WA Loja!</h2>
        </Col>
        <Col
          xs={12}
          md={8}
          className="d-flex justify-content-center align-items-center"
        >
          <Form>
            {!isLogin ? (
              <Form.Group className="mb-3">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  onChange={(e) => SetNome(e.target.value)}
                  type="email"
                  className="form-control-lg"
                  required
                />
              </Form.Group>
            ) : null}

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                onChange={(e) => SetEmail(e.target.value)}
                type="email"
                className="form-control-lg"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Senha</Form.Label>
              <Form.Control
                onChange={(e) => SetPassword(e.target.value)}
                type="password"
                className="form-control-lg"
                required
              />
            </Form.Group>

            {!isLogin ? (
              <Form.Group className="mb-3">
                <Form.Label>Tipo de Usuário</Form.Label>
                <div>
                  <Form.Check
                    type="radio"
                    name="userType"
                    label="Cliente"
                    value="6a4cda94-fbb6-476b-be29-f4124cae9058"
                    onChange={(e) => SetTypeUser(e.target.value)}
                  />
                  <Form.Check
                    type="radio"
                    name="userType"
                    label="Administrador"
                    value="7edd25c6-c89e-4c06-ae50-c3c32d71b8ad"
                    onChange={(e) => SetTypeUser(e.target.value)}
                  />
                </div>
              </Form.Group>
            ) : null}

            <LoginButton />
            <div className="text-center mt-3">
              <Button
                variant="link"
                onClick={() => {
                  SetIsLogin(!isLogin);
                }}
              >
                {isLogin ? "Não tenho cadastro" : "Já tenho cadastro"}
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

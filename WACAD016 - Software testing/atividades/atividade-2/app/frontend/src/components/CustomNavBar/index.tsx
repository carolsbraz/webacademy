import { Container, Nav, Navbar } from "react-bootstrap";
import Logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons/faRightFromBracket";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slices/user.slice";
export default function CustomNavBar() {
  const navigate = useNavigate();
  const userLogin = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<AppDispatch>();

  async function LogoutUser() {
    await dispatch(logout());
    navigate("/login");
  }

  return (
    <Navbar>
      <Container>
        <Navbar.Brand>
          <img src={Logo} width={40} />
        </Navbar.Brand>
        <Navbar.Collapse>
          <Nav>
            <Nav.Link href="/">Produtos</Nav.Link>
          </Nav>

          {userLogin.email === undefined ? (
            <Nav.Item style={{ margin: "0 auto" }}>
              <Nav.Link color="red" href="/login">
                <h6 style={{ color: "blue", textDecoration: "underline" }}>
                  Entrar/Cadastrar
                </h6>
              </Nav.Link>
            </Nav.Item>
          ) : (
            <>
              <Nav.Link onClick={() => LogoutUser()}>
                <FontAwesomeIcon icon={faRightFromBracket} />
              </Nav.Link>
              <Nav style={{ margin: "0 auto" }}>User: {userLogin?.email}</Nav>

              {!userLogin.isAdmin ? (
                <Nav>
                  <Nav.Link href="/carrinho">Carrinho</Nav.Link>
                </Nav>
              ) : null}
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

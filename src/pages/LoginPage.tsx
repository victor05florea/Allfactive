import PageLayout from "../components/layout/PageLayout";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";

export const LoginPage = () => (
  <PageLayout>
    <div>Pagina de Autentificare</div>
    <Input label="Email" type="email" placeholder="Enter your email" />
    <Input label="Password" type="password" placeholder="Enter your password" />
    <Button variant="danger">Login</Button>
  </PageLayout>
);

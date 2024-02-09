import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'] 
})
export class CadastroComponent {
  nome: string = '';
  sobrenome: string = '';
  usuario: string = '';
  senha: string = '';
  confirmarSenha: string = '';
  senhaVisivel: boolean = false;

  submitForm() {
    if (!this.nome || !this.sobrenome || !this.usuario || !this.senha || !this.confirmarSenha) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    if (this.senha.length < 8 || !/[a-zA-Z]/.test(this.senha) || !/\d/.test(this.senha) || !/[^a-zA-Z0-9]/.test(this.senha)) {
      alert("A senha deve ter 8 ou mais caracteres, incluindo letras, números e caracteres especiais.");
      return;
    }

    if (this.senha !== this.confirmarSenha) {
      alert("A senha e a confirmação de senha não correspondem.");
      return;
    }

    // Envie os dados ao backend
    console.log("Dados do formulário:", this.nome, this.sobrenome, this.usuario, this.senha);
  }

  togglePasswordVisibility() {
    this.senhaVisivel = !this.senhaVisivel;
    const inputs = document.querySelectorAll('input[type="password"]');
    inputs.forEach(input => {
      input.setAttribute('type', this.senhaVisivel ? 'text' : 'password');
    });
  }
}
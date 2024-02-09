import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'] ,
  imports: [ReactiveFormsModule, CommonModule],
  standalone: true
})
export class CadastroComponent implements OnInit {
  cadastroForm: FormGroup;
  senhaVisivel: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.cadastroForm = this.formBuilder.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      usuario: ['', Validators.required],
      senha: ['', [Validators.required, Validators.minLength(8)]],
      confirmarSenha: ['', Validators.required]
    });
  }

  ngOnInit(): void {

  }

  submitForm() {
    if (this.cadastroForm.valid) {
      console.log("Formulário válido. Dados:", this.cadastroForm.value);
    } else {
      console.log("Formulário inválido. Verifique os campos.");
    }
  }

  getErrorMessage(controlName: string) {
    const control = this.cadastroForm.get(controlName);
    if (control?.touched && control.hasError('required')) {
      return 'Este campo é obrigatório.';
    }
    if (control?.hasError('minlength')) {
      return 'Este campo deve ter pelo menos 8 caracteres.';
    }
    return '';
  }

  togglePasswordVisibility() {
    this.senhaVisivel = !this.senhaVisivel;
    const inputs = document.querySelectorAll('input[type="password"]');
    inputs.forEach(input => {
      input.setAttribute('type', this.senhaVisivel ? 'text' : 'password');
    });
  }
}

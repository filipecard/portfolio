import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
   
    public english = {
        "welcome": "Welcome",
        "me": "I'm Filipe Cardoso",
        "sumary": "Sumary",
        "sumary0": "I am 22 years old, in the last year of college in the Systems Analysis and Development course, and have a huge amount of knowledge acquired during my formative years",
        "sumary1": "Interested in game development, with strong knowledge of Godot Engine and Unreal Engine(blueprint). Currently developing my graduation project using Unreal creating a virtual environment for the industry.",
        "sumary2": "Currently interested and learning more and more about java and spring boot",
        "sumary3": "I like all musical styles, always varying a lot what I listen to.",
        "sumary4": "I really like digital art, and I do some cool stuff sometimes, if you want to see it, ",
        "clickHere": "click here",
        "resume": "Resume",
        "linkResume": "Link to my resume",
        "projects": "Projects",
    };
    public portuguese = {
        "welcome": "Bem vindo",
        "me": "Eu sou Filipe Cardoso",
        "sumary": "Sumário",
        "sumary0": "Tenho 22 anos, cursando o último ano da faculdade no curso de Análise e Desenvolvimento de Sistemas, e possuo uma enorme quantidade de conhecimentos adquiridos durante meus anos de formação",
        "sumary1": "Me interesso em desenvolvimento de jogos, com forte conhecimento de Godot Engine e Unreal Engine (blueprint). Atualmente desenvolvendo meu projeto de graduação utilizando o Unreal criando um ambiente virtual para a indústria.",
        "sumary2": "Atualmente interessado e aprendendo cada vez mais sobre java e spring boot",
        "sumary3": "Gosto de todos os estilos musicais, sempre variando muito o que escuto.",
        "sumary4": "Eu gosto muito de arte digital, e às vezes faço algumas coisas legais, se você quiser ver, ",
        "clickHere": "clique aqui",
        "resume": "Currículo",
        "linkResume": "Link do meu currículo",
        "projects": "Projetos",
    };

    public data = this.english;
    public isEnglish = true;



    portugueseLanguage() {
        this.isEnglish = false;
        this.data = this.portuguese;
    }

    englishLanguage() {
        this.isEnglish = true;
        this.data = this.english;
    }
    title = 'portfolio';
}
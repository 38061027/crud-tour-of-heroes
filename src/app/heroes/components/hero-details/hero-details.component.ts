import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/core/services/hero.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Hero } from 'src/app/core/models/hero.model';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss']
})
export class HeroDetailsComponent implements OnInit{

 hero!:Hero
 isEditing = false;
  form = this.fb.group({
    id: [{value: '', disabled: true}],
    name: ['', [Validators.required, Validators.minLength(3)]]
  })

  constructor (
    private fb: FormBuilder,
    private heroService: HeroService,
    private location: Location,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
    ) {}


    ngOnInit(): void {
      this.getHero();
    }

    getHero(): void{
      const paramId = this.route.snapshot.paramMap.get('id')

      if(paramId !== 'new'){
        this.isEditing = true
           const id = Number(paramId);
           this.heroService.getOne(id).subscribe((hero) => {
            this.hero = hero;
            this.form.controls['id'].setValue(hero.id.toString());
            this.form.controls['name'].setValue(hero.name);
          });
      }


    }


    goBack():void{
      this.location.back();
    }


    create():void{


      const { valid, value} = this.form;

      if(valid){
       const hero: Hero = {
         name: value.name,
       } as Hero;

       this.heroService.create(hero).subscribe(() => this.goBack())
      }else{
        this.showErrorMsg()
      }


    }

    update():void{


     const { valid, value} = this.form;

     if(valid){
      const hero: Hero = {
        id: this.hero.id,
        name: value.name,
      } as Hero

      this.heroService.update(hero).subscribe(() => this.goBack())
     }else{
      this.showErrorMsg();
     }

    }


    private showErrorMsg():void{

        this.snackBar.open('Please check the errors found.', 'Ok',{
          duration: 5000,
          verticalPosition: 'top',
        })
    }

}

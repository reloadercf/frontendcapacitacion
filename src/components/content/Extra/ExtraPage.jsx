import React, { Component } from 'react';
import { ExtraList } from './ExtraList';
import {Filters} from './Filters'
class ExtraPage extends Component {


    state = {
        search:'',
        category:'',
        videos:[],
        categories:[],
    }
    componentWillMount(){
        this.getProducts()
        this.getCategories()
    }

    getProducts=()=>{
        //const userToken = JSON.parse(localStorage.getItem('userRanchoToken'));
        let url = 'https://still-chamber-95677.herokuapp.com/apis/curso_extra/';
        var request = new Request(url, {
            method: 'GET',
            //body: data,
            headers: new Headers({
                //'Authorization':'Token '+userToken,
                'Content-Type': 'application/json'
            })
        });
        fetch(request)
            .then(r=>r.json())
            .then(data=>{
                //console.log(data)
                this.setState({videos:data})
            })
            .catch(e=>{
                console.log(e)
        })
    }

    getCategories=()=>{
        //const userToken = JSON.parse(localStorage.getItem('userRanchoToken'));
        let url = 'https://still-chamber-95677.herokuapp.com/apis/categoria/';
        var request = new Request(url, {
            method: 'GET',
            //body: data,
            headers: new Headers({
                //'Authorization':'Token '+userToken,
                'Content-Type': 'application/json'
            })
        });
        fetch(request)
            .then(r=>r.json())
            .then(data=>{
                //console.log(data)
                this.setState({categories:data})
            })
            .catch(e=>{
                console.log(e)
        })
    }

    handleSearch=(e)=>{
        this.setState({search:e.target.value})
    }

    handleCategory=(value)=>{
        this.setState({category:value})

    }


    render() {
        let {videos, search, category, categories} = this.state;

        const regEx = new RegExp(search, 'i');
        let filteredProducts = videos.filter(i=>{
            return regEx.test(i.titulo)
        })
        
        if(category){
            filteredProducts = filteredProducts.filter(p=>{
                return p.categoria.nombrecategoria === category
            })
        }
        return (
            <div style={{height:"40vh"}}>
            <Filters 
                categories={categories}
                search={search}
                category={category}
                handleCategory={this.handleCategory}
                handleSearch={this.handleSearch}          
            />
            <ExtraList  videos={filteredProducts}/>

          </div>
        );
    }
}

export default ExtraPage;
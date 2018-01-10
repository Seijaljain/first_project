import React, { Component } from 'react';

 class AddProject extends React.Component {
     static defaultProps={
         categories : ['Web Design', 'Web Development', 'Mobile Development']
     }

     handleSubmit(){
         
     }
   
  render() {
        let categoryOptions = this.props.categories.map( category =>{
            return <option key={category} value="category">{category}</option>
            
        }

        )
    return (
           <div>
          <h3> Add Project </h3>
          <form onSubmit={this.handleSubmit}>
              <div>
                  <label>Title</label><br />
                  <input type="text" ref = "Title" />
                      </div>
                      <div>
                  <label>Category</label><br />
                <select ref="Category">
                  {categoryOptions}
                    </select><br/>
                      </div>
                      <input type="submit" value="Submit" />
              </form>
        
           </div>
    );
  }
 }
export default AddProject;
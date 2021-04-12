
const LicensePage = ()=>{

    let date = new Date();
    let year = date.getFullYear();
    

    return (
        <>
        <div className="container my-4 text-center bg-dark text-light">
        <h3 className="my-4">This Software is released under the MIT license and is copyright {year} Twitter. Boiled down to smaller chunks, it can be described with the following conditions.</h3>

<h3 >It requires you to:</h3>

<ul className="h5 font-weight-light my-3">
  <li >Keep the license and copyright notice included in (this software) CSS and JavaScript files when you use them in your works</li>
</ul>

<h3 className="my-3">It permits you to:</h3>

<ul className="h5 font-weight-light my-3">
  <li>Freely download and use This Software, in whole or in part, for personal, private, company internal, or commercial purposes</li>
  <li>Use This Software in packages or distributions that you create</li>
  <li>Modify the source code</li>
  <li>Grant a sublicense to modify and distribute This Software to third parties not included in the license</li>
</ul>

<h4 className="my-3">It forbids you to:</h4>

<ul className="h5 font-weight-light my-3">
  <li>Hold the authors and license owners liable for damages as This Software is provided without warranty</li>
  <li>Hold the creators or copyright holders of This Software liable</li>
  <li>Redistribute any piece of This Software without proper attribution</li>
  <li>Use any marks owned by Twitter in any way that might state or imply that Twitter endorses your distribution</li>
  <li>Use any marks owned by Twitter in any way that might state or imply that you created the Twitter software in question</li>
</ul>

<h4 className = "my-3">It does not require you to:</h4>

<ul className="h5 font-weight-light my-3">
  <li>Include the source of This Software itself, or of any modifications you may have made to it, in any redistribution you may assemble that includes it</li>
  <li>Submit changes that you make to This Software back to the This Software project (though such feedback is encouraged)</li>
</ul>
        </div>
        </>
    )
}

export default LicensePage;
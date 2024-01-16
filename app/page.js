import Image from 'next/image'

export default function Home() {
  return (
    <main className='justify-center h-screen items-center'>
<div className = "background-image">

<div className="hero-image">
  <div className="hero-text">
    <h1>Lingua Franca</h1>
  </div>
</div>
<div className="hero-paragraph">
  <p>We provide translation and interpretation services all over the world in all European languages and many Asian languages.Below is the list of most popular languages for which we can offer services 24/7. If your target language is not on the list, please contact us and we will provide you with a solution: </p>
</div>
  <ul className ="hero-list">
      <li>English</li>
      <li>Spanish</li>
     <li>French</li>
     <li>Italian</li>
      <li>German</li>
      <li>Russian</li>
      <li>Portuguese</li>
      <li>Korean</li>
      <li>Japanese</li>
     <li>Chinese</li>
</ul>
</div>

</main>
  );
}

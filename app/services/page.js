import Image from 'next/image'

export default function Home() {
  return (
    <main className ='justify-center h-screen items-center'>
  <div className = "background-image">
   <p className ="service-text">We provide a wide range of translation and interpretation services</p>

  <table>
  <tbody>
    <tr>
  <td className= "services">
   <h2 className = "translation">Translation of</h2>
   <ul className ="translation-list">
      <li>Legal</li>
      <li>Financial</li>
      <li>Medical</li>
      <li>Certified</li>
      <li>and other documents</li>
    </ul>
  </td>


    <td class= "centerimage">
    <img src ="/images/Tower-of-Babel.jpg" className="serviceimage"/>
    </td>
    
    <td className= "services">
    <h2 className = "interpretation">Interpretation</h2>
    <ul className ="interpretation-list">
      <li>Conferences</li>
      <li>Business meetings</li>
      <li>Live events </li>
      <li>Other</li>
    </ul>
  </td>
  </tr>
  </tbody>
  </table>
  <div className = "p2service">
  <p>Translation and interpretation require knowledge, professionalism and cultural literacy. Ignoring cultural context can often lead to dull or even serious mistakes. Our certified translators and interpreters possess both the knowledge and experience to provide you with a qualitaticve service and guidance through cultural jungles. They will make sure the message you receive is an accurate reproduction of the message conveyed by your interlocutor. Do not hesitate to contact us in case you have more questions or doubts.</p>
  </div>
  </div>
  </main>
);

}

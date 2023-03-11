import './S_StartContent.scss';

function StartContent({ref}) {
  return (
    <section className='StartContent__wrapper' data-scroll-section id='asked_questions' ref={ref}>
      <div className='LineDefault custom_line'></div> 
      <div className='lefttext__block'>Как мы работаем</div> 
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, dolore reiciendis atque placeat aspernatur nemo illum magni obcaecati. Esse deserunt placeat magnam dicta ipsa laborum soluta doloremque repellat blanditiis pariatur totam, deleniti expedita perferendis error. Voluptas, magni ut recusandae asperiores hic veniam saepe. Enim in quibusdam quod accusantium doloribus! Repellat.</p>
    </section>
  );
}

export default StartContent;
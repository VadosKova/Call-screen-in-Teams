import './App.css'

function App() {
  const handleIconMouseEnter = (e) => {
    e.currentTarget.classList.add('clicked');
  };

  const handleIconMouseLeave = (e) => {
    e.currentTarget.classList.remove('clicked');
  };

  return (
    <>
      <div className='members'>
        <div className='member'>
          <div className='icon' onClick={handleIconMouseEnter} onMouseLeave={handleIconMouseLeave}>КВ</div>
          <div className='fio'>Ковальов Вадим Віталійович</div>
        </div>
        <div className='member'>
          <div className='icon' onClick={handleIconMouseEnter} onMouseLeave={handleIconMouseLeave}>ФВ</div>
          <div className='fio'>Фатеев Руслан Викторович</div>
        </div>
        <div className='member'>
          <div className='icon' onClick={handleIconMouseEnter} onMouseLeave={handleIconMouseLeave}>ЧА</div>
          <div className='fio'>Чмель Богдан Артемович</div>
        </div>
        <div className='member'>
          <div className='icon' onClick={handleIconMouseEnter} onMouseLeave={handleIconMouseLeave}>ЗА</div>
          <div className='fio'>Зукуліс Катерина Анатоліївна</div>
        </div>
        <div className='member'>
          <div className='icon' onClick={handleIconMouseEnter} onMouseLeave={handleIconMouseLeave}>ЦД</div>
          <div className='fio'>Цисар Андрій Дмитрович</div>
        </div>
        <div className='member'>
          <div className='icon' onClick={handleIconMouseEnter} onMouseLeave={handleIconMouseLeave}>ГВ</div>
          <div className='fio'>Глоба Яна Вячеславівна</div>
        </div>
        <div className='member'>
          <div className='icon' onClick={handleIconMouseEnter} onMouseLeave={handleIconMouseLeave}>ДА</div>
          <div className='fio'>Демшевська Емма Андріївна</div>
        </div>
        <div className='member'>
          <div className='icon' onClick={handleIconMouseEnter} onMouseLeave={handleIconMouseLeave}>ПС</div>
          <div className='fio'>Присяжний Марк Сергійович</div>
        </div>
        <div className='member'>
          <div className='icon' onClick={handleIconMouseEnter} onMouseLeave={handleIconMouseLeave}>БС</div>
          <div className='fio'>Брагін Олександр Сергійович</div>
        </div>
        <div className='member'>
          <div className='icon' onClick={handleIconMouseEnter} onMouseLeave={handleIconMouseLeave}>СС</div>
          <div className='fio'>Столярова Анна Станіславівна</div>
        </div>
        <div className='member'>
          <div className='icon' onClick={handleIconMouseEnter} onMouseLeave={handleIconMouseLeave}>ШЮ</div>
          <div className='fio'>Шевченко Володимир Юрійович</div>
        </div>
        <div className='member'>
          <div className='icon' onClick={handleIconMouseEnter} onMouseLeave={handleIconMouseLeave}>ЧС</div>
          <div className='fio'>Чепурко Владислав Сергійович</div>
        </div>
        <div className='member'>
          <div className='icon' onClick={handleIconMouseEnter} onMouseLeave={handleIconMouseLeave}>ОВ</div>
          <div className='fio'>Ор'єв Максим Віталійович</div>
        </div>
      </div>
    </>
  )
}

export default App

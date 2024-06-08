import React from "react";

const App = () => {
  return (
    <div className="bg-black text-gold min-h-screen p-8">
      <header className="text-center mb-12 bg-gray-800 p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4">
          Elevando tu Gestión de Proyectos con Estilo y Eficiencia
        </h1>
      <h1 className="text-6xl font-bold mb-4">
          KuroGestor
        </h1>
        
        <p className="text-xl">
          La herramienta definitiva para organizar, planificar y ejecutar tus
          proyectos con elegancia y profesionalismo.
        </p>
      </header>
     
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Introducción
        </h2>
        <p className="max-w-4xl mx-auto mb-6 text-center text-center mb-12 bg-gray-800 p-6 rounded-lg shadow-lg">
          ¿Te gustaría gestionar tus proyectos con una herramienta que no solo
          es poderosa y eficiente, sino también visualmente impactante?
          Presentamos KuroGestor, un componente React diseñado para la gestión
          de proyectos
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Descripción del Producto
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Gestión de Proyectos</h3>
            <p>
              Crea y organiza proyectos de manera eficiente. Asigna roles,
              establece prioridades y controla todo desde una plataforma
              centralizada.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">
              Calendarios Interactivos
            </h3>
            <p>
              Planifica y visualiza todas tus tareas y eventos importantes en un
              calendario dinámico. Mantén el control de tus plazos con
              facilidad.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Gestión de Usuarios</h3>
            <p>
              Invita a los miembros de tu equipo, asigna tareas específicas y
              colabora en tiempo real para maximizar la productividad.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Tareas</h3>
            <p>
              Divide los proyectos en tareas manejables. Asigna fechas de
              vencimiento y sigue el progreso sin complicaciones.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Tecnología de Vanguardia
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Backend</h3>
            <p>
              Nuestra plataforma utiliza PHPMyAdmin para la gestión de bases de
              datos y Node.js para un rendimiento rápido y escalable.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Frontend</h3>
            <p>
              Disfruta de una experiencia de usuario fluida y moderna con React
              y Axios, asegurando una comunicación eficiente con el backend.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-center">Beneficios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Estética Profesional</h3>
            <p>
              Impresiona a tus clientes y equipo con una interfaz elegante y
              sofisticada.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Eficiencia Aumentada</h3>
            <p>
              Optimiza la colaboración y la productividad de tu equipo con
              herramientas diseñadas para mejorar la organización y la
              visibilidad de los proyectos.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Personalización</h3>
            <p>
              permite una personalización de vista para adaptar la web a una
              vista las brillante.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-center">Conclusión</h2>
        <p className="max-w-4xl mx-auto text-center text-center mb-12 bg-gray-800 p-6 rounded-lg shadow-lg">
          No dejes que la gestión de proyectos sea una tarea monótona. Con
          KuroGestor, transforma la forma en que organizas y ejecutas tus
          proyectos con una herramienta que es tan hermosa como funcional. Únete
          a nosotros y lleva tu gestión de proyectos al siguiente nivel.
        </p>
      </section>

      <section className="text-2xl font-semibold mb-4 text-center">
        <button className="text-2xl font-semibold  bg-gray-600 p-5 rounded-lg shadow-lg mt-8 text-center">
          <a href="https://front-end-gestor-vercel.vercel.app/">
            Prueba nuestra web ahora!
          </a>
        </button>
      </section>
    </div>
  );
};

export default App;

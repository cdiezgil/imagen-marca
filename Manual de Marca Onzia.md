# Manual de Marca: Onzia

## 0. Arquitectura de Ecosistema
> **Nota de Herencia:** **Onzia** (la plataforma de herramientas analíticas para juegos de Fantasy) es un subproyecto del ecosistema **cdiezgil**. Este documento define las reglas específicas para esta herramienta, pero se rige por las normas fundacionales de la Marca Madre: la tipografía Geist, el Grid de 8pt, la paleta de colores (Azul Marino Oscuro, Oro, Gris Técnico) y el ecosistema de texturas. El sello de garantía `by { cdiezgil }` debe estar presente en los footers de la interfaz.

## 1. Nuestra Marca en el Entorno Fantasy
El mundo de los juegos de Fantasy suele estar lleno de estridencias visuales, diseños ruidosos tipo casino y excesiva gamificación barata. 
**Onzia** llega para ofrecer lo opuesto: una herramienta sobria, quirúrgica y profesional para los *mánagers* que basan sus decisiones en datos empíricos y no en intuiciones.

- **Propósito:** Proporcionar una ventaja competitiva injusta (pero legal) a través del análisis de datos de jugadores, calendarios y finanzas en juegos Fantasy.
- **Voz:** Directa, analítica, sin humo. Como un analista de Big Data sentado en el banquillo de un equipo de primera división. 

## 2. Identidad Visual Específica

### 2.1 El Símbolo: La Geometría Táctica
Para diferenciar el proyecto de GalopApp y reflejar su naturaleza puramente analítica, Onzia utiliza un imagotipo basado en la abstracción y la táctica, alejándose de la figura humana.

- **Diseño del Símbolo ("La Geometría Táctica"):** Un isotipo hiper-minimalista que representa un campo de fútbol en perspectiva trapezoidal. Las líneas del campo no son continuas, sino que están formadas por recortes de espacio negativo (heredando la técnica visual de GalopApp).
- **El Toque de Datos (Los Nodos):** Sobre la geometría del campo, se superponen 3 nodos (círculos perfectos) conectados por una línea rígida, simulando una jugada táctica de pizarra o una gráfica de rendimiento financiero.
- **Color y Aplicación:** El símbolo es siempre de color sólido (Blanco o Azul Marino Oscuro). Nunca lleva rellenos ni degradados.
- **Acompañamiento:** En el footer de la aplicación, este símbolo convivirá siempre con la firma tipográfica `by { cdiezgil }` para validar la calidad de la herramienta matriz.

### 2.2 Tratamiento del Color (Acento Deportivo)
Aunque la herramienta utiliza la paleta universal al 100%:
- **Fondo General:** Azul Marino Oscuro (`#0A1122`). Da un aspecto técnico y "modo oscuro" que descansa la vista frente a las tradicionales webs verdes de fútbol.
- **Llamadas a la Acción Principales (Fichar, Alinear, Vender):** Botones en Oro (`#FFD700`).
- **Estados de Rendimiento (Indicadores Visuales):** En estadísticas deportivas, a veces se requieren colores semánticos. 
  - *Jugador en racha / Subida de valor:* Verde esmeralda (ajustado en luminosidad para que contraste con el Azul Marino).
  - *Lesionado / Bajada de valor:* Rojo coral (sofisticado, no puro).
  - *Estos colores semánticos NUNCA se usan en fondos o logotipos*, solo en pequeños indicadores (flechas, pequeños puntos de estado).

## 3. UI/UX: El Dashboard Táctico
El reto en este proyecto es mostrar múltiples variables cruzadas (valor económico, puntos proyectados, racha, calendario).

- **Mentalidad de Interfaz:** La herramienta debe parecerse más al terminal de un corredor de bolsa o a un dashboard de ingeniería que a un videojuego.
- **Tarjetas de Jugadores (Player Cards):** En lugar del clásico cromo de fútbol, las fichas de jugador utilizan nuestra textura de **Metal Cepillado Oscuro** como fondo (para jugadores Top) o Gris Técnico, organizando la estadística en columnas perfectas alineadas gracias a los números tabulares de la fuente *Geist Light*.
- **Pantallas de Carga:** Durante el recálculo de alineaciones óptimas, se mostrará un loader animado con nuestra textura de **Líneas Diagonales** procesando los datos.

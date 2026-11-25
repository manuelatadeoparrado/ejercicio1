# LOG · Proyecto de Manuela

## 03/11 · Publicar la web en GitHub Pages
Criterio: que la URL pública abra la web. 1 vuelta. ✅
Aprendido: los archivos van sueltos en la raíz del repo, no dentro de una carpeta, y Pages tarda unos minutos en publicarse.

## 03/11 · Cambiar el color de fondo y el tamaño del título
Criterio: que el cambio se vea en la URL pública. 1 vuelta. ✅
Aprendido: cambiarlo en Visual Studio no basta; hay que volver a subir el archivo a GitHub.

## 16/11 · Crear los archivos de contexto
Criterio: usar las 4 plantillas del profe (SOUL, CONTEXT, INSTRUCTIONS, LOG). ❌ la primera vez
Aprendido: ChatGPT se inventó sus propios archivos (personalidad, contexto, criterio, log). Hay que pedirle que use las plantillas que le paso.

## 16/11 · Actualizar los textos de la web (index.html)
Criterio: cambiar el título, la frase y la pregunta según INSTRUCTIONS.md, manteniendo el diseño. 1 vuelta. ✅
Aprendido: con la petición bien escrita en INSTRUCTIONS, salió a la primera.

## 17/11 · Revisar y corregir el CONTEXT
Criterio: que el documento refleje fielmente el proyecto. 2 vueltas. ✅
Correcciones:
- Título: corregirlo.
- Números: 546 cuentas seguidas y 490 seguidores. Las cifras anteriores eran de una versión vieja que me pasó Manuela.
- Añadir las cifras que faltaban: 2 de cada 3 likes son reels, 9 publicaciones propias y hora de más actividad entre las 22:00 y las 23:00.
- Tono: corregirlo.
- Replika: faltaba y lo añadí.
- Objetivo: ya estaba definido, no debía aparecer como pendiente.
- Descartado: dejarlo vacío; había repetido contenido de los referentes.

Aprendido: no dar por buenos los datos ni completar apartados por mi cuenta. Respetar las correcciones de Manuela y enseñarle el documento antes de guardarlo.
Manuela tiene que revisar los datos que me pasa con su documento del proyecto.

## 18/11 · Comprobar que los cambios están en GitHub
Criterio: que el CONTEXT corregido y el index.html con mis textos estén en el repo. ❌
Aprendido: ChatGPT dijo que los había guardado, pero en GitHub seguían los viejos (solo se guardó el LOG). Después de cada OK, comprobar en GitHub o en la carpeta que el archivo ha cambiado de verdad.

## 18/11 · Primer scroll
Criterio: que sorprenda, siga STYLE-TILE.png, tenga buen contraste, rompa una regla a propósito y use un dato real. 1 vuelta. ❌ (a medias)
Bien: sigue los colores y la tipografía del style tile, la pregunta sale enorme y usa un dato real (2.244 likes).
Mal: el botón «Habla con Algo» es lima sobre la tarjeta lima y casi no se ve (falla el contraste); en el 2.244 las cifras están tan juntas que el punto desaparece; «Habla con Algo» no lleva a ningún chat; la «regla rota» (poner el dato a un lado) no es romper ninguna regla.
Aprendido: pedirle que compruebe el contraste de cada botón con su fondo, y explicarle mejor qué es romper una regla a propósito.

## 18/11 · Corregir el primer scroll
Criterio: que el botón «Habla con Algo» se vea y que el 2.244 se lea bien. 1 vuelta. ✅
Cambios: botón «Habla con Algo» marrón con texto blanco; quitado el espaciado negativo del número y del título; el número usa Anybody más ancha, como en el style tile.
Pendiente: «Habla con Algo» todavía no lleva a ningún chat, y falta romper una regla de verdad.

---
# V1 de la web: pasar mi Figma a HTML, scroll a scroll
Desde aquí trabajo con Claude, porque con la versión gratis de ChatGPT no me llegaban los mensajes. Mismo método: ficha de INSTRUCTIONS → versión → la compruebo con la ficha → corrijo. Las capturas de cada versión están en versiones/.

## 18/11 · Scroll 1 · Home
Criterio: que se parezca a mi Figma y que Algo sea lo que más llama la atención después de la pregunta, también en el móvil. 2 vueltas. ✅
- v1: igual que el Figma (texto a la izquierda, Algo a la derecha). En el ordenador ✅, pero en el móvil Algo salía al final, después de todo el texto, y no se veía al entrar. ❌
- v2: en el móvil Algo sube justo debajo de la pregunta grande; en el ordenador, Algo un poco más grande. ✅
Aprendido: hay que mirar cada scroll también en el móvil, porque el orden cambia y lo importante puede quedar abajo.

## 18/11 · Scroll 2 · Datos
Criterio: que los números sean lo primero que se ve y coincidan con CONTEXT.md; que el texto se lea bien sobre el lima. 3 vueltas. ✅
- v1: igual que el Figma (texto arriba y 4 tarjetas pequeñas abajo). Los números coinciden, pero quedan al final, pequeños, y media pantalla vacía a la derecha. ❌
- v2: texto a la izquierda y números a la derecha, con el 2.244 en una tarjeta marrón grande. Error: el estilo de las tarjetas grises pisaba al de la marrón y el 2.244 salía blanco sobre gris, casi invisible. ❌
- v3: arreglado el orden del CSS (la tarjeta marrón gana); el 2.244 en lima sobre marrón y las otras 3 cifras en fila. En el móvil, los números arriba y el texto debajo. Además, en el móvil se salía de la pantalla por la derecha: corregido. ✅
Aprendido: después de cada cambio, comprobar el contraste de verdad (no fiarse del código) y mirar que nada se salga de la pantalla en el móvil.

## 18/11 · Scroll 3 · Referentes
Criterio: fichas con la misma estructura y Algo con el perro ocupando el hueco, como en el Figma; enlaces que funcionan. 2 vueltas. ✅
- v1: las 4 fichas con sus textos y capturas, pero con alturas distintas (Click Click Click más corta), la imagen de Algo con el perro enorme (hacía la fila el doble de alta que Replika) y la captura de Replika cortaba el título. ❌
- v2: fichas de cada fila igual de altas; Algo ocupa exactamente el hueco al lado de Replika; la captura de Replika enseña el título. Enlaces probados: abren en otra pestaña. ✅
Nota: las capturas de los referentes no estaban en mi Figma exportadas; son capturas nuevas de cada web (18/11). En Replika recorté la parte de abajo porque salía una foto de una persona famosa.
Aprendido: una imagen grande en una rejilla puede estirar toda la fila; hay que decirle que ocupe solo el hueco.

## 18/11 · Scroll 4 · Narrativa
Criterio: tabla con la palabra a la izquierda y el texto a la derecha; las etiquetas se entienden como mis keywords; en el móvil, una columna. 2 vueltas. ✅
- v1: igual que el Figma, pero en pantalla ancha las dos columnas quedaban muy separadas, el texto a 16 px se leía pequeño y las etiquetas lima, sueltas en el centro, parecían de adorno. ❌
- v2: tabla más estrecha (como el sangrado del Figma), texto a 18 px, columna de la izquierda más corta y las etiquetas alineadas a la izquierda con el título «Keywords» delante. En el móvil, todo en una columna. ✅
Aprendido: lo que en Figma se ve bien en un frame de 1440 puede quedar vacío en el navegador; hay que limitar el ancho del texto.

## 18/11 · Scroll 5 · Conclusiones
Criterio: que la frase final sea lo que más se recuerda y que cada conclusión lleve un dato real. 2 vueltas. ✅
- v1: igual que el Figma, con las 5 conclusiones y la raya caramelo. Los datos coinciden, pero la frase final, a 28 px y debajo de todo, no destacaba más que la lista. ❌
- v2: lista a la izquierda y la frase final a la derecha, a 44 px; «Se parece a mí, pero no soy yo.» en marrón para que sea lo último que lees. En el móvil, la frase va al final. ✅
Aprendido: si una frase es la conclusión de todo, tiene que tener su propio espacio, no ir debajo de la lista.

## 18/11 · Scroll 6 · Concepto
Criterio: el chat se ve como un chat, con los mensajes exactos del Figma; «Habla con Algo» de la Home baja hasta aquí; los botones «lo real» / «lo del algoritmo» no son de adorno. 2 vueltas. ✅
- v1: tabla de concepto, tarjeta de Algo saludando y chat igual que el Figma. Pero en la Home no había ningún botón «Habla con Algo», y los botones de abajo no hacían nada («lo real» salía marcado sin que nadie lo hubiera elegido). ❌
- v2: botón «Habla con Algo» en la Home, que baja al chat (probado). Los botones «lo real» / «lo del algoritmo» se marcan al pulsarlos y enseñan una frase; ninguno sale marcado al principio. La frase dice claro que el chat de verdad llegará más adelante. ✅
Aprendido: un botón que no hace nada es decorativo; o funciona o se dice que todavía no funciona.

## 18/11 · V1 completa
Los 6 scrolls juntos, probados en ordenador (1440 px) y en móvil (390 px): nada se sale de la pantalla y no hay errores. Capturas: versiones/web-V1-ordenador.png y versiones/web-V1-movil.png.
Pendiente para la V2: que se pueda hablar con Algo de verdad; menú (Investigación · Conceptualización · Prototipado); juntarlo con lo que hago en Figma con Carla.

## 18/11 · Navegación (menú fijo)
Criterio: desde cualquier punto, cada píldora lleva a su apartado; la del apartado actual se pone lima; el logo lleva arriba; el menú no tapa los títulos. 2 vueltas. ✅
(Idea mía: en el Figma, el logo lleva a la pantalla principal y las píldoras a cada apartado desde cualquier página.)
- v1: menú fijo con el logo, Investigación · Conceptualización · Prototipado y las 6 píldoras; la píldora lima cambia sola al hacer scroll. En el ordenador, bien. Pero en el móvil Conceptualización y Prototipado se salían de la pantalla (la web se podía mover de lado) y el logo no subía del todo arriba. ❌
- v2: en el móvil, Investigación · Conceptualización · Prototipado bajan a su propia línea; las píldoras se deslizan de lado y la activa siempre se ve; el logo lleva arriba del todo. Probadas las 6 píldoras y el logo en ordenador y móvil: el título de cada apartado queda justo debajo del menú. ✅
Conceptualización y Prototipado salen en gris porque todavía no existen.
Aprendido: los menús hay que probarlos haciendo clic de verdad y esperando a que termine el scroll; si no, parece que fallan cuando no fallan.

## 18/11 · Estados del menú y de las píldoras
Criterio: los mismos estados que mis componentes de Figma (normal / ratón encima / activo) y que todo se lea bien. 2 vueltas. ✅
(Idea mía: en Figma hice los componentes «menu» y «Pestaña» con sus variantes.)
- v1: igual que el Figma. Píldoras: blancas con borde → beige (#D8C4AC) con el ratón encima → lima cuando estás en ese apartado. Menú: normal → lima con el ratón encima → negrita el activo. Las píldoras, bien (marrón sobre beige, contraste 8,6). Pero el texto lima sobre blanco del menú casi no se lee: contraste 1,4 (el mínimo es 4,5). ❌
- v2: con el ratón encima, el texto del menú sigue marrón y el lima pasa a un subrayado gordo debajo. Se mantiene el color de mi Figma y se lee bien. ✅
Aprendido: un color que en Figma parece bonito puede no leerse en texto; el contraste se puede medir, no hace falta fiarse del ojo.

## 18/11 · Menú transparente al bajar
Criterio: al hacer scroll, el fondo del menú al 50 % de opacidad para que no tape la web; arriba del todo, blanco; el menú se tiene que seguir leyendo. 2 vueltas. ✅
(Idea mía.)
- v1: fondo blanco al 50 % al bajar. Se ve la web por detrás, pero los textos de la web se mezclan con los del menú (por ejemplo, las etiquetas LÚDICO, ESPEJO… salían encima del logo) y no se lee bien. ❌
- v2: mismo 50 %, pero lo de detrás sale desenfocado. Se ven los colores de la web (el lima de Datos, las fotos) sin que se mezclen las letras. Arriba del todo vuelve a ser blanco. ✅
Aprendido: la transparencia sola hace que se mezclen dos textos; con desenfoque se ve la web y el menú se sigue leyendo.

## 24/11 · Scroll 3 · Referentes (v3: capturas enteras)
Criterio: que las capturas de los referentes se vean enteras, sin recortar ni ampliar. 1 vuelta. ✅
(Lo vi yo el 18/11: las capturas se veían «comidas», como ampliadas. Lo dejé programado para cuando volviera el límite.)
- v3: las capturas ahora se ven enteras dentro de un recuadro del mismo tamaño en las 4 fichas. Data Selfie, Click Click Click y Akinator llenan el recuadro; la de Replika es más apaisada y le queda una franja blanca arriba y abajo. Probado en ordenador y móvil.
Aprendido: «cubrir» el hueco recorta la imagen; para una captura de referencia es mejor «contener» y que se vea toda.

## 24/11 · Revisar las fichas para la entrega
Criterio de la entrega: cada ficha tiene que decir dónde decido yo y quién verifica. 1 vuelta. ✅
- Añadidas a todas las fichas las líneas DECIDO YO y VERIFICA, y al principio de INSTRUCTIONS.md los pasos para repetir el loop.
Aprendido: el «lo sabré porque» dice cómo se comprueba, pero no quién decide; hay que dejarlo escrito.

---
# V2 · La web final con Algo (25/11)
Lo que vimos en clase: las webs de los compañeros con IA estaban mucho más trabajadas, y yo había pasado mi Figma tal cual. El profe quiere la web final, no la memoria. La V1 queda como «La investigación» (memoria.html).
Ecosistema de IA: Gemini (imágenes de Algo y habitaciones) · ChatGPT (ideas y una plantilla) · Claude (código) · yo (concepto, textos, mis respuestas y validar).

## 25/11 · Probar la plantilla de ChatGPT
Criterio: que sirva como base para mi web. 1 vuelta. ❌
Era una web genérica con un muñeco con gafas que no es Algo, emojis, un correo inventado y textos de relleno.
Aprendido: una plantilla genérica no sabe nada de mi proyecto. Me quedo con ideas sueltas (preguntas rápidas, stickers, un modo especial) y lo demás lo hago con mis datos.

## 25/11 · V2 versión A: chat con Algo en tres columnas
Criterio: que no sea la típica web. 2 vueltas. ❌
- v1: Algo a la izquierda, chat en el centro y «tu perfil según Algo» a la derecha, con etiquetas arrastrables. Funcionaba, pero los stickers tapaban el título y el chat.
- v2: stickers abajo. Funciona, pero al verlo: es el mismo formato que todas las webs de clase.
Aprendido: funcionar no basta, tiene que ser una experiencia. Pido ideas y elijo mezclar tres: Algo se escapa del móvil, solo Algo y tú, y la habitación de Algo.

## 25/11 · V2 versión B: tres escenas y una gincana
Criterio: las fichas de la V2 en INSTRUCTIONS.md (escenas 1 a 5). 1 vuelta. ✅ (pendiente la habitación real definitiva)
- Entrada: Algo dentro de un móvil con mi feed, empuja, la pantalla se rompe y sale. Dos puertas.
- Habla con Algo: permiso «¿aceptas que Algo aprenda de ti?», Algo enorme y respuestas gigantes; debajo, mis respuestas reales del test. Falla cada vez más y a la 6.ª se satura. «Algo cree que eres…» con barras y «¿es real? sí / no».
- Habitación: tocas cosas, Algo camina hasta ellas. Modo algoritmo / modo real.
- Cuaderno de Algo: lo que apuntó del visitante, tachado lo que dijo que no. Final: «Ni mi algoritmo ni yo sabemos del todo quién soy. ¿Y el tuyo, qué dice de ti?»
Probado entero en ordenador y móvil, con «sí» y con «no» al permiso. Sin errores. En el móvil las puertas tapaban a Algo: corregido.

## 25/11 · Las imágenes de Algo (Gemini)
- 13 poses (quieto, saluda, habla, anda x2, empuja el cristal, salta, sentado, pensativo, ríe, sorpresa, saturado, con el móvil). Las hojas venían con todas juntas; Claude las recorta sin fondo y a la misma escala.
- Habitación del algoritmo: terracota, techno, corazones en la nevera, maleta con pegatinas. Decido dejarla así: es como me ve Instagram, una chica de catálogo.
- Habitación real, 1.ª vuelta: parecía de un hombre, ropa que no es mía. ❌ Le paso fotos de mi cuarto a Gemini.
- 2.ª vuelta: mucho mejor (mi cama, Julio en su cama gris, la bolsa de deporte, la tele con el pósit). Falla: zapatero mal, radiador y cajonera grande sobran, cremas que tengo en el baño, cargador suelto, falta el coche. Pendiente 3.ª vuelta (Gemini sin usos hasta las 15:22).
Aprendido: con fotos reales de referencia Gemini se acerca mucho más que describiendo con palabras.

## 25/11 · Algo más real
Criterio: que Algo no parezca una pegatina que se mueve. 1 vuelta. ✅ (mejorable con imágenes más grandes)
- Quitado el halo blanco del recorte; sombra en el suelo debajo de los pies (no una sombra de pegatina); respira; parpadea; abre y cierra la boca al hablar; una luz le sigue el ratón; en la habitación se hace pequeño al fondo y grande delante, y la sombra se encoge al dar el paso.
Aprendido: lo que lo hace parecer real son detalles pequeños y constantes (respirar, parpadear, la sombra), no una animación grande.

## 25/11 · Revisión antes de entregar
Al ver el vídeo del recorrido: ❌ en tres cosas, que quedan para la siguiente vuelta.
- La salida del móvil se queda corta: Algo no sale de verdad hacia ti.
- «Habla con Algo» ha perdido la sensación de chat: quiero que las voces reales salten alrededor de Algo y lo vayan rodeando.
- Algo sigue pareciendo una imagen recortada. Necesito poses más grandes de Gemini.
- Y la habitación real: 3.ª vuelta con Gemini (zapatero, quitar radiador y cajonera, el coche de Lego, el gorro tirado).
Lo que sí funciona y me gusta: tocar los objetos y que Algo diga que son suyos, y la gincana del cuaderno.
Entrego esta versión porque no es la entrega final: lo que se evalúa es que el proceso se pueda seguir y repetir.

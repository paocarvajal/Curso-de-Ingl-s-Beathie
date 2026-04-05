# CLAUDE.md - Reglas del Proyecto

## 🎯 Contexto del Proyecto

Este es un **curso de inglés interactivo** diseñado específicamente para **Bety**, una adulta mayor mexicana que está aprendiendo inglés desde cero. El curso debe ser accesible, amigable y práctico.

---

## 👤 Perfil de la Estudiante

- **Nombre:** Bety (Beatriz)
- **Edad:** Adulta mayor
- **Idioma nativo:** Español mexicano
- **Nivel de inglés:** Principiante absoluto
- **Dispositivo principal:** Celular / Tablet
- **Objetivo:** Comunicación básica cotidiana

---

## 📐 Principios de Diseño

### Accesibilidad Visual
- **Fuentes grandes** (mínimo 16px para texto, 20px+ para contenido principal)
- **Alto contraste** entre texto y fondo
- **Botones grandes** y fáciles de tocar (mínimo 44px de altura)
- **Espaciado generoso** entre elementos
- **Iconos claros** que acompañen el texto

### Mobile-First
- Diseño responsive, optimizado primero para celular
- Elementos táctiles grandes
- Scroll vertical simple
- Sin gestos complicados

### Tono y Lenguaje
- **Siempre amigable y cariñoso** ("¡Muy bien, Bety!", "¡Excelente!")
- Instrucciones en **español claro y simple**
- Sin tecnicismos ni jerga
- Celebrar cada logro con feedback positivo
- Nunca hacer sentir mal por errores

---

## 🗣️ Reglas de Fonética

### Sistema de Pronunciación Simplificada
Usar aproximaciones en español para que Bety pueda leer y pronunciar:

| Inglés | Fonética Simplificada | Ejemplo |
|--------|----------------------|---------|
| "Hello" | jelóu | Como "je" de jefe |
| "Water" | wórer | La "t" suena como "r" suave |
| "Think" | zink | La "th" como "z" española |
| "The" | da/de | La "th" suave |

### Vocales - El Secreto
- **Vocales cortas:** Suenan similar al español
- **Vocales largas:** Suenan como el nombre de la letra en inglés
- Siempre incluir ejemplos con audio

---

## 🔊 Audio y Pronunciación

### Web Speech API
- Usar `speechSynthesis` para pronunciación
- Voz: `en-US` (inglés americano)
- Rate: `0.85` (un poco más lento para claridad)
- Siempre incluir botón de "Escuchar" con ícono de bocina 🔊

### Implementación estándar:
```javascript
function speak(text, callback) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.85;
    if (callback) utterance.onend = callback;
    speechSynthesis.speak(utterance);
}
```

---

## 📚 Estructura del Contenido

### Niveles del Curso
1. **Nivel 0:** Fonética (vocales, sonidos básicos)
2. **Nivel 1:** Fundamentos (saludos, pronombres, to be)
3. **Nivel 2:** Vocabulario masivo (+500 palabras por categorías)
4. **Nivel 3:** Gramática (verbos, tiempos, estructuras)
5. **Nivel 4:** Práctica (constructor de oraciones, lecturas)

### Formato de Lecciones de Vocabulario
Cada palabra debe incluir:
- Palabra en inglés
- Traducción al español
- Pronunciación simplificada
- Botón de audio
- Imagen cuando sea posible

### Ejemplo de estructura de datos:
```javascript
{
    en: "apple",
    es: "manzana", 
    ph: "ápol",
    audio: true
}
```

---

## 🎨 Paleta de Colores

```css
:root {
    --c-blue: #3b82f6;      /* Botones principales */
    --c-green: #22c55e;     /* Éxito, correcto */
    --c-red: #ef4444;       /* Errores (usar con cuidado) */
    --c-yellow: #eab308;    /* Destacados, warnings */
    --c-purple: #8b5cf6;    /* Gramática */
    --c-pink: #ec4899;      /* Celebraciones */
    --c-teal: #14b8a6;      /* Vocabulario */
    --background: #f8fafc;  /* Fondo claro */
    --text-main: #1e293b;   /* Texto principal */
    --text-muted: #64748b;  /* Texto secundario */
}
```

---

## 📁 Estructura de Archivos

```
/Curso de Ingles Bety
├── index.html      # Página principal y todas las vistas
├── styles.css      # Estilos globales
├── script.js       # Lógica principal, navegación, audio
├── data.js         # Vocabulario y datos de lecciones
├── book.js         # Contenido del libro interactivo
└── CLAUDE.md       # Este archivo de reglas
```

---

## ✅ Checklist para Nuevas Funcionalidades

Antes de agregar algo nuevo, verificar:

- [ ] ¿Es fácil de entender para alguien sin experiencia técnica?
- [ ] ¿Los botones son suficientemente grandes para tocar?
- [ ] ¿Incluye audio para la pronunciación?
- [ ] ¿Las instrucciones están en español claro?
- [ ] ¿Hay feedback positivo al completar?
- [ ] ¿Funciona bien en celular?
- [ ] ¿El tamaño de letra es legible?

---

## 🚫 Evitar

- Texto pequeño o difícil de leer
- Instrucciones solo en inglés
- Vocabulario o gramática demasiado avanzada
- Interfaces complicadas con muchos pasos
- Mensajes negativos o desalentadores
- Sonidos molestos o inesperados
- Popups intrusivos

---

## 💡 Ideas Pendientes

- [ ] Quiz interactivo con retroalimentación
- [ ] Progreso guardado (localStorage)
- [ ] Modo práctica de pronunciación
- [ ] Tarjetas de memoria (flashcards)
- [ ] Tabla de conjugaciones To Be / Do / Don't
- [ ] Más historias cortas

---

## 🔧 Comandos Útiles para Claude

Cuando trabajes en este proyecto, puedes pedirme:

- "Agrega una nueva categoría de vocabulario sobre [tema]"
- "Crea una lección interactiva de [gramática]"
- "Mejora el diseño de [sección] para hacerlo más accesible"
- "Agrega audio a [elemento]"
- "Crea ejercicios de práctica para [lección]"
- "Revisa la fonética de [lista de palabras]"

---

*Última actualización: Abril 2026*
*Creado con ❤️ para Bety*

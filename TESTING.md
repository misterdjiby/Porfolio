# Guide de test du portfolio

## Problème : Page blanche

Si vous voyez une page blanche, suivez ces étapes :

1. **Ouvrez la console du navigateur** (F12 ou Clic droit > Inspecter > Console)
2. **Regardez les erreurs** affichées en rouge
3. **Rafraîchissez la page** (F5 ou Ctrl+R)

## Étapes de restauration progressive

Le fichier `src/App.jsx` a été simplifié pour tester. Pour restaurer les composants :

### Étape 1 : Vérifier que React fonctionne
- Si vous voyez "Test de chargement...", React fonctionne ✅

### Étape 2 : Ajouter Header uniquement
Remplacez le contenu de `src/App.jsx` par :

```jsx
import React from 'react'
import Header from './components/Header'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  )
}

export default App
```

### Étape 3 : Ajouter les autres composants progressivement

Une fois Header fonctionnel, ajoutez :
- About
- Projects
- WorkProcess
- Skills
- Experience
- Contact

## Vérifications courantes

1. **Console du navigateur** : Ouvrez avec F12 et vérifiez les erreurs
2. **Réseau** : Vérifiez que les fichiers se chargent (onglet Network)
3. **Console** : Vérifiez les erreurs JavaScript

## Si la page reste blanche

1. Vérifiez que le serveur tourne : `npm run dev`
2. Vérifiez l'URL : `http://localhost:5173`
3. Videz le cache : Ctrl+Shift+R (hard refresh)
4. Vérifiez la console du navigateur pour les erreurs


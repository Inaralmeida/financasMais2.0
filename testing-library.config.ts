import '@testing-library/jest-dom/extend-expect'

// Configuração global para importar funções do Testing Library
import { render } from '@testing-library/react'

global.render = render

import { Button } from "@/components/ui/button"
import { FileQuestion } from "lucide-react"
import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <FileQuestion className="w-24 h-24 text-muted-foreground mb-8" />
      <h1 className="text-4xl font-bold mb-4">404 - Página Não Encontrada</h1>
      <p className="text-xl text-muted-foreground mb-8">
        Desculpe, a página que você está procurando não existe.
      </p>
      <Button asChild>
        <Link to="/">Voltar para a Página Inicial</Link>
      </Button>
    </div>
  )
}
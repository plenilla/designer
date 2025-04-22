import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function RegisterForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Регистрируйте вашу учётную запись</CardTitle>
          <CardDescription>
            Введите ваш логин и введите пароль ниже, чтобы создать свою учетную запись
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="login">Логин</Label>
                <Input
                  id="login"
                  type="text"
                  placeholder="Введите ваш логин"
                  required
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Пароль</Label>
                </div>
                <Input id="password" type="password" required />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="confirmPassword">Повторите пароль</Label>
                </div>
                <Input id="confirmPassword" type="password" required />
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full">
                  Регистрация
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
            {/* думаю надо использовать Link */}
              У вас нет аккаунта?{" "}
              <a href="/register"      className="hover:underline underline-offset-4 text-blue-500">
                Регистрация
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

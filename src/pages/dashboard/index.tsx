import { useQuery } from "@tanstack/react-query";
import { LogOut, Mail, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

import UserApi from "@/api/routes/user";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loading } from "@/components/ui/loading";
import { useAuth } from "@/providers/auth-provider";

export const DashboardPage = () => {
  const { token, clearToken } = useAuth();
  const navigate = useNavigate();

  const { data: profile, isLoading } = useQuery({
    queryKey: ["profile"],
    queryFn: () => UserApi.GetMe(),
    enabled: !!token,
  });

  const handleLogout = () => {
    clearToken();
    navigate("/", {
      replace: true,
    });
  };

  if (isLoading) {
    return <Loading fullScreen />;
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-background p-8">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Profile Dashboard
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
              <Mail className="text-muted-foreground" />
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Email
                </p>
                <p className="text-sm">{profile?.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
              <User className="text-muted-foreground" />
              <div>
                <p className="text-sm font-medium text-muted-foreground">ID</p>
                <p className="text-sm">{profile?.id}</p>
              </div>
            </div>
          </div>

          <Button
            variant="destructive"
            onClick={handleLogout}
            className="w-full"
          >
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

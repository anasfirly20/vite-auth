import { LogOut, Mail, User } from "lucide-react";
import { useTranslation } from "react-i18next";

import { useDashboardPage } from "./functions";

import { LogoutModal } from "@/components/modals/logout-modal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Error } from "@/components/ui/error";
import { Loading } from "@/components/ui/loading";

const DashboardPage = () => {
  const {
    data,
    isLoading,
    error,
    refetch,
    handleLogout,
    showModal,
    handleShowModal,
    handleCloseModal,
  } = useDashboardPage();
  const { t } = useTranslation();

  if (isLoading) {
    return <Loading fullScreen />;
  }

  if (error) {
    return <Error fullScreen onRetry={refetch} />;
  }

  return (
    <>
      <div className="min-h-screen flex justify-center items-center bg-background p-8">
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              {t("dashboard.title")}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
                <Mail className="text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {t("dashboard.email")}
                  </p>
                  <p className="text-sm">{data?.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
                <User className="text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {t("dashboard.id")}
                  </p>
                  <p className="text-sm">{data?.id}</p>
                </div>
              </div>
            </div>

            <Button
              variant="destructive"
              onClick={handleShowModal}
              className="w-full"
            >
              <LogOut className="mr-2 h-4 w-4" />
              {t("dashboard.logout")}
            </Button>
          </CardContent>
        </Card>
      </div>
      <LogoutModal
        isOpen={showModal}
        onClose={handleCloseModal}
        onConfirm={handleLogout}
      />
    </>
  );
};

DashboardPage.displayName = "DashboardPage";

export default DashboardPage;

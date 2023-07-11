from django.urls import path, include

from rest_framework import routers
from AppFinal import views

router=routers.DefaultRouter()
router.register(r'usuariosmedicos',views.UsuarioMedicoViewSet)
router.register(r'usuariospacientes',views.UsuarioPacienteViewSet)
urlpatterns=[
    path('',include(router.urls)),
]
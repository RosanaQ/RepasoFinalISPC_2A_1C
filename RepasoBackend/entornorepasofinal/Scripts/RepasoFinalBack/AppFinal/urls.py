from django.urls import path, include

from rest_framework import routers
from AppFinal import views
from .views import verVentasCliente
router=routers.DefaultRouter()
router.register(r'usuariosmedicos',views.UsuarioMedicoViewSet)
router.register(r'usuariospacientes',views.UsuarioPacienteViewSet)
router.register(r'servicios',views.ServiciosViewSet)
router.register(r'ventas',views.VentasViewSet)


urlpatterns=[
    path('',include(router.urls)),
    path('ventacliente/<int:pk>',verVentasCliente.as_view(),name='venta_cliente'),
]


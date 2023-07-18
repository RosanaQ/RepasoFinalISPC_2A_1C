from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response


# Create your views here.
# Tabla UsuariosMedicos
from .models import UsuariosMedicos
from .serializers import UsuarioMedicoSerializer

# Vista a tabla Usuario Pacientes
from .models import UsuariosPacientes
from .serializers import UsuarioPacienteSerializer
# Tabla Servicios
from .models import Servicios
from .serializers import ServicioSerializer
# Tabla Ventas
from .models import Ventas
from .serializers import VentaSerializer

# CRUD - ABML

# Tabla UsuariosMedicos
class UsuarioMedicoViewSet(viewsets.ModelViewSet):

    queryset=UsuariosMedicos.objects.all()
    serializer_class = UsuarioMedicoSerializer
    
# Tabla UsuariosPaciente
class UsuarioPacienteViewSet(viewsets.ModelViewSet):

    queryset=UsuariosPacientes.objects.all()
    serializer_class = UsuarioPacienteSerializer
    
    # Tabla Servicios
class ServiciosViewSet(viewsets.ModelViewSet):

    queryset=Servicios.objects.all()
    serializer_class = ServicioSerializer

# Tabla Ventas
class VentasViewSet(viewsets.ModelViewSet):
    
    queryset=Ventas.objects.all()
    serializer_class= VentaSerializer
# Ventas por cliente
class verVentasCliente(APIView):
    #permission_classes = [permissions.IsAuthenticated]
    def get(self,request,pk=None):
        ventasCliente=Ventas.objects.filter(id_UP=pk)
        serializer = VentaSerializer(ventasCliente, many=True)
        return Response(serializer.data)

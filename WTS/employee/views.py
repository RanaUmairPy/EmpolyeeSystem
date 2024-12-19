from employee.serializer import userserializer
from employee.models import Cusers
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status  # Importing status
from django.contrib.auth.hashers import check_password


class cuser_view(viewsets.ModelViewSet):
    queryset = Cusers.objects.all()
    serializer_class = userserializer

    @action(detail=False, methods=['POST'], url_path='login')  # Correct method parameter
    def login(self, request):
        email = request.data.get('email')
        password = request.data.get('password')

        try:
            user = Cusers.objects.get(email=email)
            if check_password(password, user.password):
                return Response({
                    "message": "Login successfully!...",
                    "user_id": user.id,
                    "first_name": user.first_name,
                    "email": user.email,
                    "is_superuser": user.is_superuser,
                }, status=status.HTTP_200_OK)
            else:
                return Response(
                    {"error": "Invalid email or password."},
                    status=status.HTTP_401_UNAUTHORIZED
                )
        except Cusers.DoesNotExist:
            return Response(
                {"error": "Invalid email or password."},
                status=status.HTTP_401_UNAUTHORIZED
            )

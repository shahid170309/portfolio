FROM eclipse-temurin:21-jdk

WORKDIR /app

COPY . .

RUN chmod +x mvnw 2>/dev/null || true
RUN ./mvnw clean package -DskipTests || mvn clean package -DskipTests

CMD ["sh", "-c", "java -Dserver.port=${PORT:-8080} -jar target/*.jar"]
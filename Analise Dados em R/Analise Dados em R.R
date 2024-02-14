library(dplyr)
library(tidyr)
library(plyr)

#####QUESTÃO 1
####IMPORTAÇÃO DOS DADOS

iris <- read.table("C:/Users/letic/OneDrive/Documentos/iris.data", header = TRUE, sep = ",")

bezdekIris <- read.table("C:/Users/letic/OneDrive/Documentos/bezdekIris.data", header = TRUE, sep = ",")



#####QUESTÃO 2
####contagem de linhas e colunas 

linhas_bezdek<-nrow(bezdekIris)

colunas_bezdekIris<-ncol(bezdekIris)

######Obter a classificação das variáveis 

class(iris$X5.1)
class(iris$X3.5)
class(iris$X1.4)
class(iris$X0.2)
class(iris$Iris.setosa)


#######summarize
summary(iris)


#####transformar em factor
as.factor(iris$Iris.setosa)

####contar tipos de iris

unique(iris$Iris.setosa)
fatores_unicos<-unique(iris$Iris.setosa)
contagem<- length(fatores_unicos)
print(contagem)


######QUESTÃO 3
média1<-mean(iris$X5.1)
média2<-mean(iris$X3.5)
média3<-mean(iris$X1.4)
média4<-mean(iris$X0.2)
média5<- 'NA'


row_extra<- c(média1,média2,média3,média4,média5)

iris2<-rbind(iris,row_extra)


########QUESTÃO 4

iris$classificacao <- ifelse(iris$Iris.setosa == "Iris-setosa", 1, ifelse(iris$Iris.setosa == "Iris-versicolor", 2,ifelse(iris$Iris.setosa == "Iris-virginica", 3,4))

                             
#####QUESTÃO 5      

contagem_iris <- table(iris$Iris.setosa)

cores <- c("blue", "brown","green")
barplot(contagem_iris, col = cores ,main = "Contagem de tipos Iris", xlab = "N° de Ocorrências", ylab = "Contagem")                             


#######QUESTÃO 6
pie(contagem_iris, main = "Distribuição dos Valores de Iris", col = rainbow(length(contagem_iris)))
